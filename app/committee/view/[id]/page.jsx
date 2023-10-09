"use client" ;

import React, { useEffect, useState } from 'react'
import {EventCard, Modal,Modal2 ,Title, UpdateCommittee, UpdateEvent} from '@/components'
import {FiEdit} from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image';
function ViewCommittee({params}) {
  const [isUpdate ,setIsUpdate] =useState(false)
  const [isDelete ,setIsDelete] =useState(false)
  const [isDeletting ,setIsDeletting] =useState(false)
    const [committeeData ,setCommitteeData] =useState( {
        name:"",
        email:"",
        description:"",
        password:"",
        cpassword:"",
        username:"",
        photo:null

    })

    const [eventData ,setEventData] =useState([])

    useEffect(() => {
  
      // if( committeeData.length===0) {
     const fetchData = async()=>{
      const res = await fetch(`/api/committee/viewId/${params.id}`)
      const data = await res.json()
      const res1 = await fetch(`/api/events/viewid/${params.id}`)
      const data1 = await res1.json()
  
      console.log("ima fetch inital data")
      console.log(data)
      data.ok && setCommitteeData(data.data)
      data1.ok && setEventData(data1.data)
    
     }
       fetchData()
     
       console.log("im fetch from database")
       console.log()
      
    //  }
    }, [])

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
    
    const [isUpdate1 ,setIsUpdate1] = useState(false)
    const [updateCardData ,setUpdateCardData] =useState([])
      const handleIsUpdate = (e , id)=>{
        e.preventDefault() ;
        const newData = eventData.find(item =>item._id ===id)
        setUpdateCardData(newData)
    console.log(updateCardData)
    setIsUpdate1(true)
      }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="w-[270px] h-[270px] rounded-full bg-red-400 flex justify-center items-center">
    
    {committeeData.photo!==null &&  <Image src={committeeData.photo} width={250} height={240}  className="w-[250px] h-[240px] rounded-full bg-gray-100">
</Image>}  
      </div>
      <div className="flex flex-row justify-center items-center">
      <h1 className='font-semibold text-[22px] shadow-md text-orange-400'>{committeeData.name}</h1>
{/* <Link href={'/committee/update/34324'}  > */}
<button  onClick={()=>setIsUpdate(true)}>
  <FiEdit  className='p-2 bg-cyan-800 text-white text-[30px] shadow-lg rounded-full hover:bg-cyan-900'/></button>
  {/* </Link>  */}
      </div>
<div className="">{committeeData.description }</div>
<div className="">
<Title  name={`${committeeData.name} Committee Events`} classes={"text-center"}></Title>
<Modal isOpen={isUpdate}  onClose={()=>setIsUpdate(false)}>
<UpdateCommittee datacommittee={committeeData} setIsUpdate={setIsUpdate} setDataCommittee={setCommitteeData} />

</Modal>
<div className="flex flex-wrap justify-center items-center space-x-[20px]">
{
  eventData?.map(item =>(
    <EventCard key={item._id} {...item}  handleIsUpdate={handleIsUpdate}/>
  ))
}
<Modal2 isOpen={isUpdate1} onClose={()=>setIsUpdate1(false)}>
<UpdateEvent updateEventData ={updateCardData} setIsUpdate={setIsUpdate1} committeeID = {committeeData._id} setAllEventData={setEventData} />

  </Modal2>
</div>
</div>
    </div>
  )
}

export default ViewCommittee
