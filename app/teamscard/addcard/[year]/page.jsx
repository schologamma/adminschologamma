"use client" ;
import { FormInput1, Title ,CommButton } from '@/components'

import { ForumPostList  } from '@/constants';

import React, { useContext,useEffect, useState } from 'react'
import { uploadImage } from '@/utils/ulpoadImage';

import { isValidEmail ,isValidPassword ,isValidUsername } from '@/utils/check';
import checkEmptyInput from '@/utils/checkEmptyInput'

// for import context
import DataContext from '@/context/data/DataContext'
import { getIdByName } from '@/utils/getIdByname';
function AddCard({params}) {
    const dd = useContext(DataContext)
    const [committeeList,setCommitteeList] = useState([])
useEffect(() =>  {
  
    // if( committeeList.length===0) {
   const fetchData = async()=>{
    const res = await fetch('/api/committee')
    const data = await res.json()
    data.ok && setCommitteeList(data.data)
  
   }
     fetchData()
   
     console.log("im fetch from database")
     console.log()
    
//    }
}, [])

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
    photoUrl:null,
    description:"",
    skill:"",
    cgpa:"",
    hobby:""


})

const handdleOnChangeFunc =(e)=>{
setProfileData({...profileData , [e.target.name]:e.target.value})
}

const handleImageState =(name  , value)=>{
    console.log(value , name)
    setProfileData((pre) => ({...pre , photoUrl:value}))


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
    dropDown:["Select your Committee" ,...committeeList.map(item => item.name)],
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
    onChangeFunc:handleImageState
    
},

] ;

const [isSubmitting ,setIsSubmitting] = useState(false)



const handleSubmit =async (e)=>{
    e.preventDefault() ;
    const inp = checkEmptyInput(profileData);
    if(inp.length >0){
      return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
    }

    const committeeId = getIdByName( profileData.type,committeeList)
if(committeeId===null){
    return dd.setAlertFunc("error" ,("Please select committee First "))

}
setProfileData(pre=>({...pre , type:committeeId}))
    
    setIsSubmitting(true)
// first : upload the image in cloudanry

// if(committeeData.photo !=null) {
const imgUrl =await uploadImage(profileData.photoUrl)

 setProfileData(pre=>({...pre , photoUrl:imgUrl.result.secure_url}))
console.log(imgUrl?.result.secure_url)
if(!imgUrl.result){

return  dd.setAlertFunc('error' ,"Server Error")
}
console.log(profileData)

// connect with databse here :
console.log(imgUrl.result.secure_url)

const res = await fetch(`/api/teams/teamperson/${params.year}` , {
method:"PUT",
body:JSON.stringify({...profileData , photoUrl:imgUrl.result.secure_url , type:committeeId})

});
console.log(profileData)
const data = await res.json() ;
setIsSubmitting(false)

dd.setAlertFunc(data.type ,data.msg)

console.log(data)




// }




}



    return (
    <div>
   <Title name={"Add Team Participants : "} classes={"text-center"} />
   <div className="flex flex-col justify-center items-center ">
    {
        profilecardDetailForm.map((item ,idex)=>(
            <FormInput1 {...item}/>
        ))
    }

    <CommButton title={"ADD"} handdleSubmite={handleSubmit} key={"hgjg"} isSubmitting={isSubmitting}  />
   </div>

    </div>
  )
}

export default AddCard
