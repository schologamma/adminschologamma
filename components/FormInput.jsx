"use client" ;
import React from 'react'
import SignIn from './SignIn';

const FormInput =({name , value , placeholder , type , classes , OnchangeFun})=> {
  return (
    <div>
      <input type={type?type:"text"} placeholder={placeholder} value={value} onChange={(e)=>OnchangeFun(e,name)} className={`${classes} outline-none border-none px-[16px] py-[8px] rounded-lg `} />

    </div>
  )
}
export default FormInput