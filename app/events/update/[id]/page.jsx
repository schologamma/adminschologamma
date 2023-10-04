"use client" ;
import React from 'react'
import { useEffect ,useState } from 'react';
import {CommButton ,FormInput1} from '@/components'
import { committeeList} from '@/constants'
function UpdateFormEvent({prams}) {

useEffect(() => {
    // implement the fetch function here..
}

, [])



    const [dataEvent , setDataEvent] = useState({
        name:"",
        type:"",
        organizer:"",
        sdate :"",
        edate:"",
        venue:"",
        poster:"",
        description:"",
        joinLink:""
    
    }
        
    );
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
        dropDown :committeeList
        
    },
    {
        name:"sdate" ,
        placeholder :"Enter Start Date" ,
        onChangeFunc :handdleEventChange,

        value :dataEvent.sdate ,
        type:"date",
        
    },
    {
        name:"edate" ,
        placeholder :"Enter End Date" ,
        onChangeFunc :handdleEventChange,
    
        value :dataEvent.edate ,
        type:"date",
        
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
    onChangeFunc :handdleEventChange,

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





  return (
    <div>
hi
<div className="flex justify-center items-center  flex-col  ">
{/* <FormInput name="name" value ="" placeholder="Enter your name"  type ="text" classes ="w-[400px] m-2 " OnchangeFun={(e,name)=>{}} /> */}
{
    eventForm.map((item  , index )=>(
<FormInput1  {...item}  />
    

    ))
    
}
<CommButton title={"Submit"} CssClasses={""} handdleSubmite={()=>{console.log(eventForm)}} />


</div>
      
    </div>
  )
}

export default UpdateFormEvent
