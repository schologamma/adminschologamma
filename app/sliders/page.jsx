"use client" ;
import {  FormInput1, Title } from '@/components'
import React,{useState} from 'react'
import {sliderdata} from '@/constants'
import Link from 'next/link';
const SliderCard= ({name , imageLink ,description ,onClickFun}) =>{


 
  return (
    <div className="card card-compact w-96  shadow-xl bg-blue-900  m-[10px]">
  <figure className=' w-full h-[190px] bg-slate-500'><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="no preview" /></figure>
  <div className="card-body">
    <h2 className="card-title">Slide {name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
     <Link href={'/sliders/update/32432'} ><button name={name}  htmlFor='my_modal_6' className="btn btn-primary" onClick={onClickFun} >
      Change Image</button></Link> 

      
    </div>
  </div>
</div>
  )
}
function Sliders() {
 
  const [isUpdate ,setIsUpdate ] = useState(false)


  const setUpdateCard = (e)=>{
    console.log(e.target.name)
    setIsUpdate(true)

  }

  return (
    <div>
<Title name={"Sliders"} classes={"text-center"} />
<div className="flex flex-row justify-around items-center  flex-wrap">

      {
      sliderdata.map((item, index)=>(
        <SliderCard  {...item} onClickFun = {setUpdateCard}/>
      ))
      }

      {/* The button to open modal */}
{/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Sliders
