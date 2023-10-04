"use client" ;
import { Title ,FormInput1, CommButton } from '@/components'
import React from 'react'
import { useState } from 'react'
function EditSlide() {
    const[formData ,setFormData] = useState({
        imageLink:"" ,
        description:"" 
      })
    
      const [targetData , setTargetData] =useState({
        imageLink:"",
        description:""
      })
      const handdleChange = (e)=>{
    setFormData({...formData , [e.target.name] :e.target.value})
      }
      const sliderChangeForm = [
        {
          name:"imageLink",
        type:"file",
        placeholder:"Upload your Slider image",
        value:formData.imageLink,
        onChangeFunc :handdleChange
        
    } ,
    {
      name:"description",
    type:"text",
    placeholder:"Enter description about slides",
    value:formData.description,
    onChangeFunc :handdleChange
    
    }
      ]
  return (
    <div>
        
        <Title name={"Edit Sildes"} classes={"text-center"} />

      <div className="flex flex-col justify-center items-center">
        {sliderChangeForm.map((item , index) =>(
            <FormInput1  {...item}/>

        ))}
<CommButton title={"update"} handdleSubmite={()=>{console.log(sliderChangeForm)}} />
      </div>
    </div>
  )
}

export default EditSlide
