"use client";
import React, { useState ,useContext} from 'react'
// import {useRouter} from ''
import { useRouter } from 'next/navigation';
import { CommButton, FormInput1, Title } from '.'
import checkEmptyInput from '@/utils/checkEmptyInput';
import { isValidEmail ,isValidUsername ,isValidPassword} from '@/utils/check';
import DataContext from '@/context/data/DataContext';
function SignIn() {

  const router = useRouter() 
  const dd = useContext(DataContext)
  const [userData ,setUserData] =useState({
   email:"",
    username:"",
    type:"",
    password :"",
    
  })

  const [isSubmitting , setIsSubmitting] = useState(false)
  const handdleOnChangeFunc = (e)=>{
setUserData({...userData , [e.target.name]:e.target.value})
  }

  const formData = [
    {
      name:"email" ,
      type:"text",
      value:userData.email ,
      placeholder:"Enter your Email",
      onChangeFunc:handdleOnChangeFunc
  }
  ,
  {
    name:"username",
    type:"text",
    placeholder:"Enter your username",

    value:userData.username ,
    onChangeFunc:handdleOnChangeFunc

  },
  {
    name:"type" ,
    type:"dropdown",
    value:userData.type ,
    dropDown:["Admin" , "Committee" , "Developer"],

    placeholder:"Select your role",
    onChangeFunc:handdleOnChangeFunc
},
  {
    name:"password",
    type:"password",
    placeholder:"Enter your password",

    value:userData.password ,
    onChangeFunc:handdleOnChangeFunc

  }

  ]

  const handdleSubmit =async (e) =>{
    e.preventDefault() ;
    const inp = checkEmptyInput(userData);
    if(inp.length >0){
      return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
    }

    if (!isValidEmail(userData.email) ){
      return dd.setAlertFunc("error" ,("Invalid Email !"))

    }
    if (!isValidUsername(userData.username) ){
      return dd.setAlertFunc("error" ,("Invalid username. Must be 8-20 alphanumeric characters and unique."))

    }
    if (!isValidPassword(userData.password) ){
      return dd.setAlertFunc("error" ,("Password must be ≥ 8 chars with 1 uppercase, 1 lowercase, 1 digit, and 1 special character."))

    }
    // isValidPassword
    // check email and username before submit 
  //  console.log()
  //  return 0
    //  userData.email
    setIsSubmitting(true)
    try{
      const res = await fetch('/api/user/',{
        method:"POST" ,
        body:JSON.stringify(userData)
      }) ;
      const data = await res.json()
      console.log(data)

      if( data.ok ===true )
      { dd.setAuth({
       user:true,
       authtoken:data.token
      }) 
      
      dd.auth && router.push('/')
    }
    setIsSubmitting(false)
// for giving the error oin mongoose
    if(data?.error){
    return dd.setAlertFunc(data.type , data.error)
      
    }
      console.log(data.error)
    dd.setAlertFunc(data.type , data.msg)

  }
  catch(e){

  }
  }
  return (
    <div className='flex justify-center items-center '>
      <div className="flex flex-col justify-center  bg-slate-300 rounded-xl shadow-xl items-center mt-[30px]">
      <Title  name={"SignIn"} classes={"text-center"}/>
<div className="m-[60px] text-gray-700">

{
  formData.map((item , index) =>(
    <FormInput1 {...item} />

  ))


}
<CommButton title={"SignIn"} handdleSubmite={handdleSubmit} isSubmitting={isSubmitting}/>

</div>

      </div>

      
    </div>
  )
}

export default SignIn
