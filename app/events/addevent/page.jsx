"use client" ;
import React  , {useContext, useState}from 'react'
import {CommButton, FormInput ,FormInput1 ,Title} from '@/components'
import { committeeList } from '@/constants'
import checkEmptyInput from '@/utils/checkEmptyInput';
import { isValidEmail ,isValidUsername ,isValidPassword} from '@/utils/check';
import DataContext from '@/context/data/DataContext';
import { uploadImage } from '@/utils/ulpoadImage';

function AddEvent() {
    const [ isSubmitting  ,setIsSubmitting] =useState(false)
const dd = useContext(DataContext)  ;

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
        body:JSON.stringify({...dataEvent , poster:imgUrl.result.secure_url})
    
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
