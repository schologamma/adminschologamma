"use client";
import React, { useContext } from 'react'
import { FormInput1, Title  ,CommButton} from '@/components';
// import { } from '@/constants'
import { useState } from 'react';
import { uploadImage } from '@/utils/ulpoadImage';

import { isValidEmail ,isValidPassword ,isValidUsername } from '@/utils/check';
import checkEmptyInput from '@/utils/checkEmptyInput'

// for import context
import DataContext from '@/context/data/DataContext'
function AddCommittee() {

    const dd = useContext(DataContext)
    const[committeeData , setCommitteeData] = useState({
        name:"",
        email:"",
        description:"",
        password:"",
        cpassword:"",
        username:"",
        photo:null

    });
    const handleOnChange =(e) =>{
        // if(e.target === "")
       
        
        setCommitteeData({...committeeData , [e.target.name]:e.target.value})
        }
const handleImageState =(name  , value)=>{
    console.log(value , name)
    setCommitteeData((pre) => ({...pre , photo:value}))


}
    // committee from struct 
    const  CommitteeForm = [
        {
            name:"name" ,
            placeholder:"Enter the name of Committte :",
            value :committeeData.name, //ex: member /Head / Co-Head /Admin
            type:"text",
            required:true ,
            onChangeFunc:handleOnChange
            
        },
        {
            name:"email" ,
            placeholder:"Enter your Email",
            value :committeeData.email, //ex: member /Head / Co-Head /Admin
            type:"text",
            required:true ,

            onChangeFunc:handleOnChange

            
        },
        {
            name:"description" ,
            placeholder:"Enter the Description about Committee",
            value :committeeData.description, //ex: member /Head / Co-Head /Admin
            type:"text",
            required:true ,

            onChangeFunc:handleOnChange

            
        },
        {
            name:"username" ,
            placeholder:"Enter your UserName" , 
            value :committeeData.username , //ex: member /Head / Co-Head /Admin
            type:"text",
            required:true ,

            onChangeFunc:handleOnChange

            
        },
        {
            name:"password" ,
            placeholder:"Enter your Password :",
            value :committeeData.password, //ex: member /Head / Co-Head /Admin
            type:"password",
            required:true ,

            onChangeFunc:handleOnChange

            
        },
        {
            name:"cpassword" ,
            placeholder:"Confirm your Password :",
    
            value :committeeData.cpassword , //ex: member /Head / Co-Head /Admin
            type:"password",
            required:true ,

            onChangeFunc:handleOnChange

            
        },
        {
            name:"photo" ,
            placeholder:"Upload your Committe Logo :",
    
            value :'' , 
            required:true ,

            type:"file",
            onChangeFunc:handleImageState ,
            

        }
    ] ;

    const [isSubmitting  ,setIsSubmitting] = useState(false)
    const handdleSubmit =async (e)=>{
        e.preventDefault() ;
        const inp = checkEmptyInput(committeeData);
        if(inp.length >0){
          return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
        }
    
        if (!isValidEmail(committeeData.email) ){
          return dd.setAlertFunc("error" ,("Invalid Email !"))
    
        }
        if (!isValidUsername(committeeData.username) ){
          return dd.setAlertFunc("error" ,("Invalid username. Must be 8-20 alphanumeric characters and unique."))
    
        }
        if (!isValidPassword(committeeData.password) ){
          return dd.setAlertFunc("error" ,("Password must be ≥ 8 chars with 1 uppercase, 1 lowercase, 1 digit, and 1 special character."))
    
        }

        if (committeeData.password !==committeeData.cpassword ){
            return dd.setAlertFunc("error" ,("Password are not match with the confirmed password"))
      
          }



        
        setIsSubmitting(true)
// first : upload the image in cloudanry

// if(committeeData.photo !=null) {
const imgUrl =await uploadImage(committeeData.photo)

imgUrl?.result && setCommitteeData(pre=>({...pre , photo:imgUrl.result.secure_url}))
console.log(imgUrl?.result.secure_url)
if(!imgUrl.result){

 return  dd.setAlertFunc('error' ,"Server Error")
}
// connect with databse here :

const res = await fetch('/api/committee/add' , {
    method:"POST",
    body:JSON.stringify({...committeeData , photo:imgUrl.result.secure_url})

});
const data = await res.json() ;
setIsSubmitting(false)

 dd.setAlertFunc(data.type ,data.msg)

console.log(data)




// }




    }


  return (
    <div>
      <Title name={"Create the new Committee"} classes={"text-center"}/>
      <div className=" flex flex-col justify-center items-center">
      {CommitteeForm.map((item , index)=>(
        <FormInput1 key={item.name+index} {...item} />
      ))}

<CommButton title={"Create" } handdleSubmite={handdleSubmit} isSubmitting={isSubmitting}/>

      </div>
   
    </div>
  )
}

export default AddCommittee
