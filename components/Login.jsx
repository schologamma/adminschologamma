"use client";
import React, { useState } from 'react'
import { CommButton, FormInput1, Title } from '.'
import { useContext } from 'react';
import DataContext from '@/context/data/DataContext';
import { useRouter } from 'next/navigation';
function Login() {

  const [userData ,setUserData] =useState({
    username:"",
    password :"",
    dropdown:""
    
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
    value:userData.dropdown ,
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
  const dd = useContext(DataContext)

 const handdleSubmit =async(e)=>{
  e.preventDefault() ;

  setIsSubmitting(true)
    try{
       const res =  await fetch('/api/user/login',{
          method:"POST" ,
          body:JSON.stringify(userData)
        });
        const data =await res.json();
        console.log(data)
   


        setIsSubmitting(false)
        if( data.ok ===true )
        { dd.setAuth({
         user:true,
         authtoken:data.token
        }) 
        dd.auth && router.push('/')
      }
        // console.log("Success")
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
