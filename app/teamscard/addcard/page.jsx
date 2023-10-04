"use client" ;
import { FormInput1, Title ,CommButton } from '@/components'

import { ForumPostList ,committeeList } from '@/constants';

import React, { useState } from 'react'


function AddCard() {

// create the hook for storing the data
const[profileData ,setProfileData] = useState({
    name:"",
    BT_ID:"",
    DOB:"",
    position:"" ,
    type:"" ,
    linkedinUrl:"",
    facebookUrl:"",
    instragramUrl:"",
    currentYear:"",
    photoUrl:"",
    description:"",
    skill:"",
    cgpa:"",
    hobby:""


})

const handdleOnChangeFunc =(e)=>{
setProfileData({...profileData , [e.target.name]:e.target.value})
}
// profile vard form 
const  profilecardDetailForm = [
    {
        name:"name" ,
        placeholder :"Enter your Name" ,
        value :profileData.name ,
        type:"text",
        onChangeFunc:handdleOnChangeFunc

        
    }
,
{
    name:"BT_ID" ,
    placeholder :"Enter your BTech-ID" ,
    value :profileData.BT_ID ,
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"DOB" ,
        placeholder :"Enter your Date Of Birth" ,
        value :profileData.DOB ,
    type:"date",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"position" ,
    placeholder :"Enter your role in Forum" ,
    value :profileData.position , //ex: member /Head / Co-Head /presisdent
    type:"dropdown",
    dropDown:ForumPostList,
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"type" ,
    placeholder :"Enter your Committee or Admin" ,

    value :profileData.type, //ex: techspot committee  /Admin
    type:"dropdown",
    dropDown:committeeList,
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"linkedinUrl" ,
    placeholder :"Enter the Linkdin Url",
    value :profileData.linkedinUrl , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"facebookUrl" ,
    placeholder :"Enter the facebook Url",
    value :profileData.facebookUrl , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"instragramUrl" ,
    placeholder :"Enter the instragram Url",
    value :profileData.instragramUrl , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
},
{
    name:"currentYear" ,
    placeholder:"Enter the Current Year of study",
    value :profileData.currentYear , //ex: member /Head / Co-Head /Admin
    type:"dropdown",
    dropDown :["3","2" ,"4"],
    onChangeFunc:handdleOnChangeFunc

    
},
{
    name:"cgpa" ,
    placeholder:"Enter your Last CGPA",
    value :profileData.cgpa , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}

,
{
    name:"hobby" ,
    placeholder:"Enter your hobby :",
    value :profileData.hobby , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"skill" ,
    placeholder:"Write your Skill here :",
    value :profileData.skill , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"description" ,
    placeholder :"Enter the Summery about you :" ,

    value :profileData.description , //ex: member /Head / Co-Head /Admin
    type:"text",
    onChangeFunc:handdleOnChangeFunc

    
}
,
{
    name:"photoUrl" ,
    placeholder :"upload the image here :" ,

    value :profileData.photoUrl , //ex: member /Head / Co-Head /Admin
    type:"file",
    onChangeFunc:handdleOnChangeFunc
    
},

] ;

    return (
    <div>
   <Title name={"Add Team Participants : "} classes={"text-center"} />
   <div className="flex flex-col justify-center items-center ">
    {
        profilecardDetailForm.map((item ,idex)=>(
            <FormInput1 {...item}/>
        ))
    }

    <CommButton title={"ADD"} handdleSubmite={()=>{console.log(profilecardDetailForm)}} key={"hgjg"} />
   </div>

    </div>
  )
}

export default AddCard
