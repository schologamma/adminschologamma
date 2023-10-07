"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { useRef } from 'react';
function FormInput1({name , value , placeholder , type ,onChangeFunc ,dropDown ,required}) {
  const inputRef = useRef() ;
  const [fileD ,setFileD] =useState(null);
  const handleChangeImage=(e)=>{
    e.preventDefault();
    const file = e.target.files?.[0] ;
    if(! file){
          return
    }
    
    if(!file.type.includes('image')){
          return alert("Please upload the image file") 
    }
    
    const reader = new FileReader();
    console.log()
    reader.readAsDataURL(file) ;
    reader.onload =()=>{
          const result = reader.result  ;
setFileD(result)
          onChangeFunc( name, result)
          // handleStateChange('image' , result)
    }
    
    
    }
  
  {if (type == "dropdown") {

    return  <>
<label htmlFor={name+type} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white 
">{placeholder}</label>
<select id={name+type} name={name} className="max-w-xl w-full min-w-[200px] m-2 bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500
"
onChange={onChangeFunc} >
  {dropDown?.map((item , index) =>(
  <option key={index} value={item}>{item}</option>

  ))}

</select>

    </> 
  }
  else if(type==="file"){

    
    return <div className="relative h-auto max-w-xl w-full min-w-[200px] m-2">
      {fileD!=null && <Image src={fileD} width={200} height={170} className={'w-fit h-[300px]'} />}
    <input
    type={type?type:"text"}
    name={name}
      className=" peer h-full w-full rounded-md border border-green-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "  onChange={handleChangeImage}
     
    />
    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      {placeholder}
    </label>
    </div>
    
  }
 
  else {
return <div className="relative h-11 max-w-xl w-full min-w-[200px] m-2 text-gray-600">
<input
type={type?type:"text"}
name={name}
  className="peer h-full w-full rounded-md border border-green-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
  placeholder=" " value={value} onChange={onChangeFunc}
  required={true}
/>
<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
  {placeholder}
</label>
</div>


  }
    
       
  }
   
  
}

export default FormInput1
