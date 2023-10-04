"use client";
import React from 'react'
import { FormInput1, Title  ,CommButton} from '@/components';
// import { } from '@/constants'
import { useState } from 'react';

function AddCommittee() {
    const[committeeData , setCommitteeData] = useState({
        name:"",
        email:"",
        description:"",
        password:"",
        cpassword:"",
        username:"",
        photo:""

    });
    const handleOnChange =(e) =>{
        setCommitteeData({...committeeData , [e.target.name]:e.target.value})
        }

    // committee from struct 
    const  CommitteeForm = [
        {
            name:"name" ,
            placeholder:"Enter the name of Committte :",
            value :committeeData.name, //ex: member /Head / Co-Head /Admin
            type:"text",
            onChangeFunc:handleOnChange
            
        },
        {
            name:"email" ,
            placeholder:"Enter your Email",
            value :committeeData.email, //ex: member /Head / Co-Head /Admin
            type:"text",
            onChangeFunc:handleOnChange

            
        },
        {
            name:"description" ,
            placeholder:"Enter the Description about Committee",
            value :committeeData.description, //ex: member /Head / Co-Head /Admin
            type:"text",
            onChangeFunc:handleOnChange

            
        },
        {
            name:"username" ,
            placeholder:"Enter your UserName" , 
            value :committeeData.username , //ex: member /Head / Co-Head /Admin
            type:"text",
            onChangeFunc:handleOnChange

            
        },
        {
            name:"password" ,
            placeholder:"Enter your Password :",
            value :committeeData.password, //ex: member /Head / Co-Head /Admin
            type:"password",
            onChangeFunc:handleOnChange

            
        },
        {
            name:"cpassword" ,
            placeholder:"Confirm your Password :",
    
            value :committeeData.cpassword , //ex: member /Head / Co-Head /Admin
            type:"password",
            onChangeFunc:handleOnChange

            
        },
        {
            name:"photo" ,
            placeholder:"Upload your Committe Logo :",
    
            value :committeeData.photo , 
            type:"file",
            onChangeFunc:handleOnChange

        }
    ] ;

    const [isSubmitting  ,setIsSubmitting] = useState(false)
    const handdleSubmit =async (e)=>{
        e.preventDefault() ;

setIsSubmitting(true)


    }


  return (
    <div>
      <Title name={"Create the new Committee"} classes={"text-center"}/>
      <div className=" flex flex-col justify-center items-center">
      {CommitteeForm.map((item , index)=>(
        <FormInput1 key={item.name+index} {...item} />
      ))}

<CommButton title={"Create" } handdleSubmite={handdleSubmit} />

      </div>
   
    </div>
  )
}

export default AddCommittee
