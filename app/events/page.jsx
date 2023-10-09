"use client";
import EventCard from '@/components/EventCard'
import React, { useEffect ,useState} from 'react'
import Link from 'next/link'
import { Title ,Modal ,UpdateEvent } from '@/components'
function Events() {
const[eventData,setEventData]=useState([])
  useEffect(() => {
  
    // if( eventData.length===0) {
   const fetchData = async()=>{
    const res = await fetch(`/api/events/`)
    const data = await res.json()

    console.log("ima fetch inital data")
    console.log(data)
    data.ok && setEventData(data.data)
  
   }
     fetchData()
   
     console.log("im fetch from database")
    //  console.log()
    
  //  }
  }, [])

  const [isUpdate ,setIsUpdate] = useState(false)
const [updateCardData ,setUpdateCardData] =useState([])
  const handleIsUpdate = (e , id)=>{
    e.preventDefault() ;
    const newData = eventData.find(item =>item._id ===id)
    setUpdateCardData(newData)
console.log(updateCardData)
setIsUpdate(true)
  }
  return (
    <div>
      <Title name={"All Events"} classes={"text-center"} />
      <div className="flex justify-center items-center">
      <Link href={'/events/addevent'}  className=" w-[170px] h-[170px] rounded-2xl shadow-2xl bg-green-300 flex flex-col justify-center items-center ">
  <div className="text-[130px] font-extrabold text-black">+</div>
</Link>


      </div>

<div className="flex flex-row flex-wrap justify-around items-center">
  {
    eventData?.map(item =>(
<EventCard key={item._id} {...item}  handleIsUpdate={handleIsUpdate} />

    ))

  }
   

</div>
  <Modal isOpen={isUpdate} onClose={()=>setIsUpdate(false)}>
<UpdateEvent updateEventData ={updateCardData} setIsUpdate={setIsUpdate} setAllEventData={setEventData} />

  </Modal>
      
    </div>
  )
}

export default Events
