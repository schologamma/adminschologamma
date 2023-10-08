"use client";
import React from 'react'
import { FormInput1, Title  ,CommButton} from '@/components';
// import { } from '@/constants'
import { useState } from 'react';

function UpdateCommittee23({params}) {

    // implement the use effect hook for fetch the data of perticular committee
    const[committeeData , setCommitteeData] = useState({
        name:"",
        email:"",
        description:"",
        photo:""

    });
    const handleOnChange =(e) =>{
        setCommitteeData({...committeeData , [e.target.name]:e.target.value})
        }
const handleOnChangeImage =() =>{
    
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
            name:"photo" ,
            placeholder:"Upload your Committe Logo :",
    
            value :committeeData.photo , 
            type:"file",
            onChangeFunc:handleOnChangeImage

        }
    ] ;



  return (
    <div>
      <Title name={"Update TechSpot Committee"} classes={"text-center"}/>
      <div className=" flex flex-col justify-center items-center">
      {CommitteeForm.map((item , index)=>(
        <FormInput1 key={item.name+index} {...item} />
      ))}

<CommButton title={"Update" } handdleSubmite={()=>{console.log(CommitteeForm)}} />

      </div>
   
    </div>
  )
}

export default UpdateCommittee23
