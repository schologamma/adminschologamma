"use client"
import Link from "next/link";
import { Title } from ".";
import Image from "next/image";
import { useEffect, useState } from "react";

const CommitteCard = ({name , _id ,photo, css})=>{
    return (
        <div className="flex flex-col justify-center items-center m-[20px]">

        <Link href={`/committee/view/${_id}`} className={`${css?css:""}`}>
            <div className="w-[250px] h-[250px] rounded-full gol shadow-2xl platinumcss flex justify-center items-center">
            <Image src={photo} width={210} height={210} alt={name}  className="w-[210px] h-[210px] rounded-full bg-gray-600 ">
</Image>
            </div>
        </Link>
            
            <div className=" bg-red-700 text-white font-extrabold  shadow-xl flex justify-center items-center w-[300px] px-[4px] text-[22px] rounded-full py-[5px]"><h1>{name}</h1></div>
        </div>
    )
}

const AddCommitteBtn = ()=>{
    return (
        <div className="flex flex-col justify-center items-center ">

        <Link href={'/committee/addcommittee'} className="">
            <div className="w-[250px] h-[250px] rounded-full gol shadow-2xl platinumcss flex justify-center items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-gray-600 flex flex-col justify-center items-center  ">
                <h1 className="text-[170px] font-extrabold text-green-400 drop-shadow-lg">+
                    </h1>
                  
</div>
            </div>
        </Link>
        </div>

    )
}
const Committe =()=>{
    const [committeeData , setCommitteeData] = useState([])
    useEffect(() => {
  
        // if( committeeData.length===0) {
       const fetchData = async()=>{
        const res = await fetch(`/api/committee/`)
        const data = await res.json()
    
        console.log("ima fetch inital data")
        console.log(data)
        data.ok && setCommitteeData(data.data)
      
       }
         fetchData()
       
         console.log("im fetch from database")
         console.log()
        
    //    }
    }
       , [])


return <div>
    <Title name={"All Committies in Forum"} classes={"text-blue-400 text-center"}></Title>
    <div className="flex justify-center items-center flex-wrap ">
    <AddCommitteBtn/>

    </div>

    <div className="flex justify-around items-center flex-wrap">
    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 */}
    {
        committeeData?.map((item, index)=>(
            <CommitteCard key={item._id} {...item}/>

        ))
    }
  
    </div>
   
    
    
    </div> 
}
export default Committe ;