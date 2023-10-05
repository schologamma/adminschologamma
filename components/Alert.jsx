"use client"
import React, { useContext } from 'react'
import DataContext from '@/context/data/DataContext';
export default function Alert() {
    const dd = useContext(DataContext) ;
    // const {alert} =dd
    // const {type , msg} = alert.alert
console.log(dd.alert)
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
if( dd.alert !==null ){
const time = (dd.alert.type ==="error") ?6500:4000
const sleepFun =async()=>{
  await sleep(time)
// alert("hi evenbtr")
dd.alert.type!==null &&(
  dd.setAlert({type:null , msg:""})
)
}
sleepFun();

}
if(dd.alert.type !== null ) {
  console.log(dd.alert.type)
  return (
    <div className='fixed top-[60px] left-0 right-0  opacity-70  z-[40]'>
     <div className={`alert ${dd.alert.type==="warning"?"alert-warning":"alert-success"}  ${dd.alert.type==="error"?"alert-error":"alert-success"}`}>
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>{dd.alert.msg}</span>
</div>
    </div>
  ) 
}else{
    return (
<></>
        )
  }
 
}
