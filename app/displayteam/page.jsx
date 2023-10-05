import { Title } from '@/components'
import React from 'react'
const Profileuicons = () =>{
    return (
        <div className="relative h-[300px]">
            <div className="w-[180px] h-[180px] rounded-full goldencss flex justify-center items-center  ">
            <div className="w-[150px] h-[150px] rounded-full bg-gray-400  ">
</div>
            </div>
            <div className="bg-white w-[180px] h-[190px] absolute top-[100px] rounded-t-full left-0 right-0 z-[-1]">
<div className="flex flex-col justify-center items-center mt-[100px] bgcardcss  text">
<h2 className='text-orange-400  text-[18px] font-extrabold'>President</h2>
<h2 className='text-gray-400 font-semibold  text-[16px]'>Admin</h2>
<h2 className='text-green-500 '>Aditya Chandure</h2>


</div>


            </div>
        </div>
    )
}

const CardCategory = (type ,data ) =>{
    return(
<div className="flex flex-row justify-around items-center flex-wrap">
{
    [{type:"admin"},{type:"admin"} ,{type:"admin"} ,{type:"admin"} ,{type:"admin"} ,{type:"admin"} ,{type:"admin"}, {type:"admin"} ,{type:"admin"} , {type:"head"}].map((item , index)=>{
        if(item.type ==="admin")
        return <Profileuicons  key={index} />
        
    } 
    ) 
}


</div>
    )
}
export default function Displayteam() {
  return (
    <div>
      <div className="w-[full] h-[100vh] ">
        <div className="">
            <Title name={"Schologamma - 2023"} classes={"text-center text-blue-400"}></Title>

        </div>
        {/*  */}
<CardCategory type="admin"  data={[]}/>

        
      </div>
    </div>
  )
}
