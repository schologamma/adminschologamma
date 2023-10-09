'use client'
import { CommButton, FormInput1, Modal,ModalAlert, Title, UpdateCard } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import DataContext from '@/context/data/DataContext'

const TeamCardProfile = (    {name,
BT_ID,
DOB,
position,
type,
linkedinUrl,
facebookUrl,
instragramUrl,
currentYear,
photoUrl ,
description,
skill,
cgpa,
hobby ,
year ,
setIsUpdate,
handleUpdateBtn,
handleDelete ,
_id

})=>{



  return (
    <div className="   md:w-[600px]  m-2 p-4 rounded-t-full md:rounded-tr-none  md:rounded-l-full relative shadow-xl">
      <div className="bg-slate-400  opacity-10  absolute top-0 left-0 right-0 bottom-0 z-[-1] rounded-t-full md:rounded-tr-none  md:rounded-l-full"></div>
    <div className="flex flex-col md:flex-row  ">
<div className="flex flex-row justify-center items-center w-[170px] ">
  <Image src={photoUrl} width={200} height={200} alt='name' className='w-[170px] h-[160px] bg-slate-600 rounded-full'/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2  mx-[8px] w-full ">
<p>Name</p> 
<p>{name}</p> 

<p>Position</p> 
<p>{position}</p> 

<p>Year :</p> 
<p>{currentYear}</p>

<p>Short Description:</p> 
<p>{description}</p> 

<p>skill:</p> 
<p>{skill}</p>

</div>


</div>
<div className="flex justify-end space-x-1">
  <Link href={{ pathname: `/teamscard/teamcarddetail/${BT_ID}`, query: { year:year } }}>
  <button className='border-blue-400  text-blue-400 border-2  hover:text-gray-600 hover:bg-blue-400 py-1 px-2 rounded-lg '>View</button>

  </Link>
  {/* <Link href={'/teamscard/editcard/2313213'}  > */}
  <button className='border-green-400  border-2 text-green-400 hover:text-gray-600 hover:bg-green-400 py-1 px-2 rounded-lg ' onClick={(e)=>handleUpdateBtn(e ,_id)}>Edit</button>
   {/* </Link> */}
  <button className='border-red-400  border-2 text-red-400 hover:text-gray-600  hover:bg-red-400 py-1 px-2 rounded-lg ' onClick={(e)=>handleDelete(e,name , BT_ID)}>Delete</button>
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
const dd = useContext(DataContext)

  const [allDataCard ,setAllDataCard] = useState([])
  // const router = useRouter({params})
  const [isUpdate ,setIsUpdate] =useState(false)
  const [isDelete ,setIsDelete] =useState(false)
  const [isDeletting ,setIsDeletting] =useState(false)

  const [deletename ,setDeletename] = useState({name:"" , BI_ID:""})

  useEffect(() => {
  
    if( allDataCard.length===0) {
   const fetchData = async()=>{
    const res = await fetch(`/api/teams/viewid/${params.year}`)
    const data = await res.json()

    console.log("ima fetch inital data")
    console.log(data)
    data.ok && setAllDataCard(data.data)
  
   }
     fetchData()
   
     console.log("im fetch from database")
     console.log()
    
   }}, [])

   const [datacard , setDatacard] =useState({})
  //  if(allDataCard.length >0){
  //   console.log("hell")
  //  }
  const handleUpdateBtn = (e,_id) =>{
    e.preventDefault()

    // find the data according to mthe id 
   const dataperson=  allDataCard.find((item)=>item._id===_id)

   setDatacard(dataperson)
   console.log(dataperson)
    console.log("hie ")
  setIsUpdate(true)
  }
  
  const handleDelete = (e ,name, BI_ID)=>{
    e.preventDefault()
    setDeletename({name,BI_ID})
    setIsDelete(true)

    // console.log(ok)
    }
  //   function filterByBTId(data, btId) {
  //     return data.filter(item => item.BT_ID !== btId);
  // }
  const delectActionFunc = async()=>{
    // delectActionFunc
    setIsDeletting(true)
   
    console.log("ok")
    // write db cosde here
    const res =await fetch(`/api/teams/delete/${params.year}` ,{
      method:"POST" ,
    body:JSON.stringify({BI_ID:deletename.BI_ID})
    })
    console.log(deletename.BI_ID)
    const dda =await res.json();
    
    console.log(dda)

  

  // const newData = filterByBTId(allDataCard , deletename.BT_ID)
    const newData =await allDataCard.filter(item=>item.name !== deletename.name)
    console.log(newData)
    setAllDataCard(newData)
    console.log("Delete")
    setIsDelete(false)
    setIsDeletting(false)
    return dd.setAlertFunc(dda.type , dda.msg)

  }
  return(
    <div className="">
      <div className="text-center"><Title name={"ScholoGamma 2023 Teams"} /></div>
      <Link href={'/displayteam'} className="btn bg-blue-300">View page</Link>
      
{/* For Add the button */}
<Link href={`/teamscard/addcard/${params.year}`} className={"flex justify-center items-center"} >
<Addbtn />

</Link>
{/* for update card */}
<Modal isOpen={isUpdate} onClose={()=>setIsUpdate(false)}>
<UpdateCard datacard={datacard} year={params.year} setIsupdate={setIsUpdate} allDataCard={allDataCard} setAllDataCard={setAllDataCard}   />

</Modal>

<ModalAlert isOpen={isDelete} onClose={()=>setIsDelete(false)}>
<div className="">
  <p>Are you want to Delete {deletename.name} ? </p>
  <div className="flex flex-row justify-end space-x-4 mt-[50px]">

 
  <CommButton  title={"cancel"} CssClasses={"bg-blue-500"} handdleSubmite={()=>setIsDelete(false)}/>

  <CommButton  title={"Confrim"} CssClasses={"bg-red-500"}  handdleSubmite={delectActionFunc} isSubmitting={isDeletting}/>
  </div>
</div>
</ModalAlert>
  
  <div className='flex flex-row flex-wrap justify-center items-center'>
    {
      allDataCard?.map((item , index)=>(
<TeamCardProfile {...item} key={item._id}  year={params.year} setIsUpdate={setIsUpdate} handleUpdateBtn={handleUpdateBtn} handleDelete={handleDelete} />

      ))

    }

</div>
  </div>)
}