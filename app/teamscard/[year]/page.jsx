'use client'
import { Title } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
const TeamCardProfile = ()=>{

  return (
    <div className="   md:w-[600px]  m-2 p-4 rounded-t-full md:rounded-tr-none  md:rounded-l-full relative shadow-xl">
      <div className="bg-slate-400  opacity-10  absolute top-0 left-0 right-0 bottom-0 z-[-1] rounded-t-full md:rounded-tr-none  md:rounded-l-full"></div>
    <div className="flex flex-col md:flex-row  ">
<div className="flex flex-row justify-center items-center w-[170px] ">
  <Image src={'/'} width={200} height={200} alt='name' className='w-[170px] h-[160px] bg-slate-600 rounded-full'/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2  mx-[8px] w-full ">
<p>Name</p> 
<p>Harish Hedua</p> 

<p>Position</p> 
<p>HEad</p> 

<p>Year :</p> 
<p>2022</p>

<p>Short Description:</p> 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore quis dignissimos laborum aperiam enim ab, exercitati.</p> 

<p>skill:</p> 
<p>c++</p>

</div>


</div>
<div className="flex justify-end space-x-1">
  <Link href={'/teamscard/teamcarddetail/2313213'}>
  <button className='border-blue-400  text-blue-400 border-2  hover:text-gray-600 hover:bg-blue-400 py-1 px-2 rounded-lg '>View</button>

  </Link>
  <Link href={'/teamscard/editcard/2313213'}  >
  <button className='border-green-400  border-2 text-green-400 hover:text-gray-600 hover:bg-green-400 py-1 px-2 rounded-lg '>Edit</button> </Link>
  <button className='border-red-400  border-2 text-red-400 hover:text-gray-600  hover:bg-red-400 py-1 px-2 rounded-lg '>Delete</button>
</div>

</div>
  )
}

const Addbtn = ()=>{
  return(<div  className="   md:w-[600px]  m-2 p-4 rounded-t-full md:rounded-tr-none  md:rounded-l-full relative">
  <div className="">
      <div className="bg-slate-50  opacity-10  absolute top-0 left-0 right-0 bottom-0 z-[-1] rounded-t-full md:rounded-tr-none  md:rounded-l-full"></div>
    <div className="flex flex-col md:flex-row  ">
<div className="flex flex-row justify-center text-[84px] font-extrabold text-green-500 items-center w-[170px] h-[160px] bg-slate-600 rounded-full">
+
</div>
<div className="flex justify-center items-center text-[29px] text-center">
<h3>ADD New Participant in Committee</h3>
</div>

</div></div>

</div>)
}

export default function Teamcard({params}) {
  // const router = useRouter({params})
  return(
    <div className="">
      <div className="text-center"><Title name={"ScholoGamma 2023 Teams"} /></div>
      <Link href={'/displayteam'} className="btn bg-blue-300">View page</Link>
      
{/* For Add the button */}
<Link href={'/teamscard/addcard'} className={"flex justify-center items-center"} >
<Addbtn />

</Link>

  
  <div className='flex flex-row flex-wrap justify-center items-center'>
    
<TeamCardProfile />
<TeamCardProfile />
</div>
  </div>)
}