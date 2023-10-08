"use client" ;
import React  , {useContext, useEffect, useState}from 'react'
import {CommButton, FormInput ,FormInput1 ,Title} from '@/components'
import { committeeList } from '@/constants'
import checkEmptyInput from '@/utils/checkEmptyInput';
import { isValidEmail ,isValidUsername ,isValidPassword} from '@/utils/check';
import DataContext from '@/context/data/DataContext';
import { uploadImage } from '@/utils/ulpoadImage';
import { getIdByName } from '@/utils/getIdByname';

function AddEvent() {
    const [ isSubmitting  ,setIsSubmitting] =useState(false)
    const [committeeList , setCommitteeList] =useState([])
const dd = useContext(DataContext)  ;
useEffect(() =>  {
  
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

    const [dataEvent , setDataEvent] = useState({
        name:"",
        type:"",
        organizer:"",
        sdate :"",
        edate:"",
        venue:"",
        poster:null,
        description:"",
        joinLink:""
    
    }
        
    );

    const handleImageState =(name  , value)=>{
        console.log(value , name)
        setDataEvent((pre) => ({...pre , poster:value}))
    
    }
    
    const handdleEventChange =(e)=>{
        setDataEvent({...dataEvent ,[e.target.name]:e.target.value})
    }
// formdata
 const eventForm = [
    {
        name:"name" ,
        placeholder :"Enter your Committee Name" ,
        onChangeFunc :handdleEventChange,

        value :dataEvent.name,
        type:"text",

        
    } ,
    {
        name:"type" ,
        placeholder :"Enter the type of event" ,
        onChangeFunc :handdleEventChange,

        value :dataEvent.type ,
        type:"text",

        
    },
    {
        name:"organizer" ,
        placeholder :"Organizer Of Event" ,
        onChangeFunc :handdleEventChange,

        value :dataEvent.organizer ,
        type:"dropdown",
        dropDown :["Select your Committee" ,...committeeList?.map(item => item.name)],
        
    },
    {
        name:"sdate" ,
        placeholder :"Enter Start Date" ,
        onChangeFunc :handdleEventChange,

        value :dataEvent.sdate ,
        type:"datetime-local",
        
    },
    {
        name:"edate" ,
        placeholder :"Enter End Date" ,
        onChangeFunc :handdleEventChange,
    
        value :dataEvent.edate ,
        type:"datetime-local",
        
    }
,
{
    name:"venue" ,
    placeholder :"Enter Venue" ,
    onChangeFunc :handdleEventChange,

    value :dataEvent.venue ,
    type:"text",
    
}
,
{
    name:"poster" ,
    placeholder :"Enter Poster of event" ,
    onChangeFunc :handleImageState,

    value :dataEvent.poster ,
    type:"file",
    
}
,
{
    name:"description" ,
    placeholder :"Enter Description of Event" ,
    onChangeFunc :handdleEventChange,

    value :dataEvent.description ,
    type:"text",
    
},
{
    name:"joinLink" ,
    placeholder :"Enter join Link of Event" ,
    onChangeFunc :handdleEventChange,

    value :dataEvent.joinLink ,
    type:"text",
    
}
, 
   

]


const handleSubmit = async(e)=>{

    e.preventDefault() ;


    console.log(dataEvent)

    const inp = checkEmptyInput(dataEvent);
    if(inp.length >0){
      return dd.setAlertFunc("error" ,("Please Fill "+inp[0]+" field"))
    }

    // cnaver the committee into id
    const committeeId = getIdByName( dataEvent.organizer,committeeList)
if(committeeId ===null){
    return dd.setAlertFunc("error" ,("Please  select the oragnizer first!"))
}

setDataEvent(pre=>({...pre ,organizer:committeeId}))
    setIsSubmitting(true)
    // first : upload the image in cloudanry
    
    // if(committeeData.photo !=null) {
    const imgUrl =await uploadImage(dataEvent.poster)
    
    imgUrl?.result && setDataEvent(pre=>({...pre , poster:imgUrl.result.secure_url}))
    console.log(imgUrl?.result.secure_url)
    if(!imgUrl.result){
    
     return  dd.setAlertFunc('error' ,"Server Error")
    }
    // connect with databse here :
    
    const res = await fetch('/api/events/add' , {
        method:"POST",
        body:JSON.stringify({...dataEvent , poster:imgUrl.result.secure_url , organizer:committeeId})
    
    });
    const data = await res.json() ;
    setIsSubmitting(false)
    console.log(data)
     dd.setAlertFunc(data.type ,data.msg)

console.log("hi there")

}


  return (
    <div>
<Title name={"Add Event "} classes={"text-center"} />



<div className="flex justify-center items-center  flex-col  ">

{/* <FormInput name="name" value ="" placeholder="Enter your name"  type ="text" classes ="w-[400px] m-2 " OnchangeFun={(e,name)=>{}} /> */}
{
    eventForm.map((item  , index )=>(
<FormInput1  {...item}  key={index} />
    

    ))
    
}
<CommButton title={"Submit"} CssClasses={""} handdleSubmite={handleSubmit}  isSubmitting={isSubmitting}/>


</div>
      
    </div>
  )
}

export default AddEvent
