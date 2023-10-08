"use client";
import React, { useContext, useEffect } from 'react'
import { FormInput1, Title  ,CommButton} from '@/components';
import checkEmptyInput from '@/utils/checkEmptyInput';
import { isValidEmail } from '@/utils/check';
import DataContext from '@/context/data/DataContext';
import { uploadImage } from '@/utils/ulpoadImage';
// import { } from '@/constants'
import { useState } from 'react';

function UpdateCommittee({datacommittee ,setDataCommittee ,setIsUpdate}) {

    const dd = useContext(DataContext)
    // implement the use effect hook for fetch the data of perticular committee
    const[committeeData , setCommitteeData] = useState({
        name:"",
        email:"",
        description:"",
      
        photo:null

    });
    const [isUpdatting ,setIsUpdatting] = useState(false)

    useEffect(() => {
      datacommittee!==null && committeeData.name ==="" && setCommitteeData(datacommittee)
      console.log(datacommittee)
    }, [])
    const handleOnChangeImage = (name , data)=>{
        setCommitteeData(pre =>({...pre , [name]:data}))
    setIsImageChange(true)


    }
    
    const handleOnChange =(e) =>{
        setCommitteeData({...committeeData , [e.target.name]:e.target.value})
        }
        const [isImageChange ,setIsImageChange] = useState(false)

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

 

  const  handleSubmit = async(e)=>
    {
e.preventDefault() ;
        const inp = checkEmptyInput(committeeData)
        if(inp.length >0){
            return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
        
        }
        
        if(!isValidEmail(committeeData.email)){
            return dd.setAlertFunc("error" ,("Please Enter the valid Email "))

        }
        setIsUpdatting(true)
        // if image change then appield
        if(isImageChange){
            console.log(committeeData.photo)
        const imgUrl =await uploadImage(committeeData.photo)

 setCommitteeData(pre=>({...pre , photo:imgUrl.result.secure_url}))
console.log(imgUrl?.result.secure_url)
if(!imgUrl.result){
setIsUpdatting(false)
return  dd.setAlertFunc('error' ,"Server Error")
}
const res =await fetch(`/api/committee/update` ,{
    method:"POST",
    body:JSON.stringify({...committeeData ,photo:imgUrl.result.secure_url})
})

const data =await res.json();
console.log(data)
// const newData = data.data

console.log(committeeData)
data.ok ===true && setDataCommittee({...committeeData ,photo:imgUrl.result.secure_url})
setIsUpdatting(false)

setIsUpdate(false)
return dd.setAlertFunc(data.type ,data.msg)

}

console.log(committeeData)
        // write the cod efor update
        const res =await fetch(`/api/committee/update` ,{
            method:"POST",
            body:JSON.stringify({...committeeData})
        })

        const data =await res.json();
        console.log(data)
        const newData = data.data
        data.ok ===true && setDataCommittee(committeeData)
        setIsUpdatting(false)
        setIsUpdate(false)
   return     dd.setAlertFunc(data.type ,data.msg)

    }

  return (
    <div>
      <Title name={"Update TechSpot Committee"} classes={"text-center"}/>
      <div className=" flex flex-col justify-center items-center">
      {CommitteeForm.map((item , index)=>(
        <FormInput1 key={item.name+index} {...item} />
      ))}

<CommButton title={"Update" } handdleSubmite={handleSubmit} isSubmitting={isUpdatting}  />

      </div>
   
    </div>
  )
}

export default UpdateCommittee
