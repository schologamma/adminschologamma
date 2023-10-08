"use client" ;
import { FormInput1, Title ,CommButton } from '@/components'

import { ForumPostList  } from '@/constants';

import React, { useContext,useEffect, useState } from 'react'
import { uploadImage } from '@/utils/ulpoadImage';

import checkEmptyInput from '@/utils/checkEmptyInput'

// for import context
import DataContext from '@/context/data/DataContext'
import { getIdByName } from '@/utils/getIdByname';
// import { data } from 'autoprefixer';
function UpdateCard ({datacard ,setIsupdate ,year ,setAllDataCard ,allDataCard }) {
    const dd = useContext(DataContext)
    const [committeeList,setCommitteeList] = useState([])

const [isImageChange,setIsImageChange] =useState(false)
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

useEffect(() =>  {
datacard !==null && profileData.name ==="" && setProfileData(datacard)
  
    if( committeeList.length===0) {
   const fetchData = async()=>{
    const res = await fetch('/api/committee')
    const data = await res.json()
    data.ok && setCommitteeList(data.data)
  
   }

 fetchData()
   
     console.log("im fetch from database")
     console.log()
    
   }}, [])
const handdleOnChangeFunc =(e)=>{
setProfileData({...profileData , [e.target.name]:e.target.value})
}

const handleOnChangeImage = (name , data)=>{
    setProfileData(pre =>({...pre , [name]:data}))
setIsImageChange(true)


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
// ,
// {
//     name:"BT_ID" ,
//     placeholder :"Enter your BTech-ID" ,
//     value :profileData.BT_ID ,
//     type:"text",
//     onChangeFunc:handdleOnChangeFunc

    
// }
,
{
    name:"DOB" ,
        placeholder :"Enter your Date Of Birth" ,
        value :profileData.DOB ,
    type:"date",
    onChangeFunc:handdleOnChangeFunc

    
}
// ,
// {
//     name:"position" ,
//     placeholder :"Enter your role in Forum" ,
//     value :profileData.position , //ex: member /Head / Co-Head /presisdent
//     type:"dropdown",
//     dropDown:ForumPostList,
//     onChangeFunc:handdleOnChangeFunc

    
// }
// ,
// {
//     name:"type" ,
//     placeholder :"Enter your Committee or Admin" ,

//     value :profileData.type, //ex: techspot committee  /Admin
//     type:"dropdown",
//     dropDown:["Select your Committee" ,...committeeList.map(item => item.name)],
//     onChangeFunc:handdleOnChangeFunc

    
// }
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
    placeholder :"upload your updated the image here :" ,

    value :profileData.photoUrl , //ex: member /Head / Co-Head /Admin
    type:"file",
    onChangeFunc:handleOnChangeImage
    
},

] ;

const [isSubmitting ,setIsSubmitting] = useState(false)



const handleSubmitUpdate =async (e)=>{
    e.preventDefault() ;
console.log(profileData)

    console.log("hello update page")
    const inp = checkEmptyInput(profileData);
    if(inp.length >0){
      return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
    }

    // const committeeId = getIdByName( profileData.type,committeeList)
// if(!committeeId){
//     return dd.setAlertFunc("error" ,("Please select committee First "))

// }
// setProfileData(pre=>({...pre , type:committeeId}))
    
    setIsSubmitting(true)
console.log(profileData)

if(isImageChange){
    const imgUrl =await uploadImage(profileData.photoUrl)

    setProfileData(pre=>({...pre , photoUrl:imgUrl.result.secure_url}))
   console.log(imgUrl?.result.secure_url)
   if(!imgUrl.result){
        setIsSubmitting(false)

   return  dd.setAlertFunc('error' ,"Server Error")
   }
   const res = await fetch(`/api/teams/teamperson/${year}` , {
    method:"PUT",
    body:JSON.stringify({...profileData ,photoUrl:imgUrl.result.secure_url  })
    
    });
    console.log(profileData)
    const data = await res.json() ;
    const ds = data.data
    
    const filt =allDataCard.filter(item =>item.BT_ID !== profileData.BT_ID)
    
    data.ok && setAllDataCard((pre)=>([...filt, {...profileData ,photoUrl:imgUrl.result.secure_url}]))
    
    setIsSubmitting(false)
    
    setIsupdate(false)
   return dd.setAlertFunc(data.type ,data.msg)

}


const res = await fetch(`/api/teams/teamperson/${year}` , {
method:"PUT",
body:JSON.stringify({...profileData  })

});
console.log(profileData)
const data = await res.json() ;
const ds = data.data

const filt =allDataCard.filter(item =>item.BT_ID !== profileData.BT_ID)

data.ok && setAllDataCard((pre)=>([...filt, profileData]))

setIsSubmitting(false)

setIsupdate(false)
console.log(data)

return dd.setAlertFunc(data.type ,data.msg)




// }




}



    return (
    <div classeName="">
   <Title name={"Edit Team Participants : "} classes={"text-center"} />
   <div className="flex flex-col justify-center items-center ">
    {
        profilecardDetailForm.map((item ,idex)=>(
            <FormInput1 {...item}/>
        ))
    }

    <CommButton title={"ADD"} handdleSubmite={handleSubmitUpdate} key={"hgjg"} isSubmitting={isSubmitting}  />
   </div>

    </div>
  )
}

export default UpdateCard 
