'use client' ;
import {Title} from '@/components'
import Image from 'next/image'
import {teamsData} from '@/constants'
import FormInput from './FormInput'
import { useContext, useState ,useEffect} from 'react';
import Link from 'next/link';
import { isValidYear } from '@/utils/check';
import DataContext from '@/context/data/DataContext';

const YearCard = ({year})=>{
    return (
        <Link href={`/teamscard/${year}`} className="text-[44px] font-extrabold drop-shadow-2xl text-orange-400  w-[150px] h-[150px] rounded-lg shadow-lg flex flex-wrap  justify-center items-center relative  cursor-pointer">
            <div className="bg-blue-300 opacity-10  absolute top-0 left-0 right-0 bottom-0 z-[-1] backdrop-blur-md  rounded-lg"></div>
            {year} </Link>
    )
}


  





const Teams =()=>{
  const dd = useContext(DataContext)

const [yearList , setYearList] = useState([])

const OnSubmitYear = async(e) =>{
  e.preventDefault() ;
  const year = prompt("Enter the year")
  // console.log("heloo"+year)
  
  if(year === null){
    return 0
  }
  
 if(!isValidYear(year)){
  return dd.setAlertFunc("warning" , "Please Enter the valid Year")
 } 
 
 const d = new Date()
 const year1 = d.getFullYear()
if(parseInt(year)> year1){

  return dd.setAlertFunc("warning" , "You couldn't add future teams")
}
console.log(year+"ok")
  // alert("ok a1ert")

// Start the fetch the database
const res =await fetch(`/api/teams/viewid/${year}`,{
  method:"POST"
})

const data = await res.json()
console.log(data)
if(data.ok ===true ){
  setYearList((pre)=>([...pre , {year:data?.data.year, _id:data?.data._id }]))

}
return dd.setAlertFunc(data.type , data.msg)
}


// for fetching the data at start
useEffect(() => {
  
  // if( yearList.length===0) {
 const fetchData = async()=>{
  const res = await fetch('/api/teams')
  const data = await res.json()
  data.ok && setYearList(data.data)

 }
   fetchData()
 
   console.log("im fetch from database")
   console.log()
  
//  }
}, [])

    return <div>
        <div className="flex justify-center mt-3">
        <Title name="All Teams" />

        
        </div>
        <label className="text-[84px] font-extrabold drop-shadow-2xl text-green-400  w-[150px] h-[150px] rounded-lg shadow-lg flex flex-wrap  justify-center items-center cursor-pointer  hover:bg-green-400 hover:text-slate-800 "htmlFor="my_modal_6" onClick={OnSubmitYear} >+</label>





<div className="flex justify-center items-center   w-[95%] md:w-[80%] lg:w-[75%]">
    <div className=" flex flex-row flex-wrap  space-x-2">

        {
    yearList?.map((item ,index) =>(
        <YearCard key={index["year"]} year={item["year"]} />
    ))


}
</div>

</div>

       </div> 
    }
    export default  Teams;