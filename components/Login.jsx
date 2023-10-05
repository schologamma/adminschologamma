"use client";
import React, { useState } from 'react'
import { CommButton, FormInput1, Title } from '.'
import { useContext } from 'react';
import DataContext from '@/context/data/DataContext';
import { useRouter } from 'next/navigation';
import checkEmptyInput from '@/utils/checkEmptyInput';
function Login() {
  const dd = useContext(DataContext)

  const [userData ,setUserData] =useState({
    username:"",
    password :"",
    type:""
    
  })

  const [isSubmitting ,setIsSubmitting] =useState(false)
  const handdleOnChangeFunc = (e)=>{
setUserData({...userData , [e.target.name]:e.target.value})
  }

  const formData = [
 
  
  {
    name:"username",
    type:"text",
    placeholder:"Enter your username",

    value:userData.username ,
    onChangeFunc:handdleOnChangeFunc

  },
  {
    name:"type",
    type:"dropdown",
    placeholder:"Enter your username",
dropDown:["Admin" , "Committee" , "Developer"],
    value:userData.type ,
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

  // use router 
  const router = useRouter();
  // conetext api

 const handdleSubmit =async(e)=>{
  e.preventDefault() ;
  const inp =   checkEmptyInput(userData)
if( inp.length > 0){
  
  console.log(userData.dropdown)
  return dd.setAlertFunc("error" ,( "Plese fill "+inp?.[0] +" field"))



}

  setIsSubmitting(true)
    try{
       const res =  await fetch('/api/user/login',{
          method:"POST" ,
          body:JSON.stringify(userData)
        });
        const data =await res.json();
        console.log(data)
   


        setIsSubmitting(false)
// dd.setAlert(type=data.type ,type=data.msg)

console.log(dd.alert)
      // dd.setAlertFunc(data.type , data.msg); //for set the salert in web
        if( data.ok ===true )
        { dd.setAuth({
         user:true,
         authtoken:data.token
        }) 
        dd.auth && router.push('/')
      }
      dd.setAlertFunc(data.type , data.msg)
        // console.log("I call set alert function")
    }
    catch(e){

    }
 }


 

//  console.log(a)
  return (
    <div className='flex justify-center items-center '>
      <div className="flex flex-col justify-center  bg-slate-300 rounded-xl shadow-xl items-center mt-[30px]">
      <Title  name={"Login"} classes={"text-center"}/>
<div className="m-[60px] text-gray-700">

{
  formData.map((item , index) =>(
    <FormInput1 {...item} />

  ))


}
<CommButton title={"Login"} handdleSubmite={handdleSubmit} isSubmitting={isSubmitting}/>

</div>

      </div>

      
    </div>
  )
}

export default Login
