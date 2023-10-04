'use client' ;
import {Title} from '@/components'
import Image from 'next/image'
import {teamsData} from '@/constants'
import FormInput from './FormInput'
import { useState } from 'react';
import Link from 'next/link';

const YearCard = ({year})=>{
    return (
        <Link href={'/teamscard/2022'} className="text-[44px] font-extrabold drop-shadow-2xl text-orange-400  w-[150px] h-[150px] rounded-lg shadow-lg flex flex-wrap  justify-center items-center relative  cursor-pointer">
            <div className="bg-blue-300 opacity-10  absolute top-0 left-0 right-0 bottom-0 z-[-1] backdrop-blur-md  rounded-lg"></div>
            {year} </Link>
    )
}

const Model = ()=>{

const [years , setYears] = useState("")

return (<div className="modal">
<div className="modal-box">
  <h3 className="font-bold text-lg">Create New Teame!</h3>
  <FormInput name="years" value={years} placeholder ="" type ="text" classes=""  OnchangeFun={(e)=>{setYears(e.target.value)}} />
  <div className="modal-action">
    <label htmlFor="my_modal_6" className="btn border-green-400 hover:bg-green-400 text-green-400 hover:text-gray-400">Create</label>
  </div>
</div>
</div>
)

}
  



const OnSubmitYear = () =>{
}
const d = new Date()
const year = d.getFullYear()
const Teams =()=>{
const [years , setYears] = useState("")

    return <div>
        <div className="flex justify-center mt-3">
        <Title name="All Teams" />

        
        </div>
        <label className="text-[84px] font-extrabold drop-shadow-2xl text-green-400  w-[150px] h-[150px] rounded-lg shadow-lg flex flex-wrap  justify-center items-center cursor-pointer  hover:bg-green-400 hover:text-slate-800 "htmlFor="my_modal_6"  >+</label>

{/* for the add the data */}
{/* The button to open modal */}
{/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Create !</h3>
    <p className="py-4">Are you sure to create the new Team idden </p>
    <FormInput name="years" value={years} placeholder ="Enter the Year . (ex:2023)" type ="text" classes=""  OnchangeFun={(e)=>{setYears(e.target.value)}} />
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Cancel</label>
      <label htmlFor="my_modal_6" className="btn bg-green-400 text-gray-800 hover:bg-green-700" onClick={OnSubmitYear}>Yes</label>
    </div>
  </div>
</div>


<div className="flex justify-center items-center   w-[95%] md:w-[80%] lg:w-[75%]">
    <div className=" flex flex-row flex-wrap  space-x-2">

        {
    teamsData.map((item ,index) =>(
        <YearCard key={index} year={item.year} />
    ))


}
</div>

</div>

       </div> 
    }
    export default  Teams;