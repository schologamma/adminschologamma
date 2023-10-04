"use client";
import React, { useState } from 'react'
import { CommButton, FormInput1, Title } from '.'
function SignIn() {

  const [userData ,setUserData] =useState({
   email:"",
    username:"",
    dropdown:"",
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
    name:"dropdown" ,
    type:"dropdown",
    value:userData.dropdown ,
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
    
    setIsSubmitting(true)
    try{
      const res = await fetch('/api/user/',{
        method:"POST" ,
        body:JSON.stringify(userData)
      }) ;
      const data = await res.json()
      console.log(data)
      setIsSubmitting(false)

      console.log("Success")
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
