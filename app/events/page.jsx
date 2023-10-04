import EventCard from '@/components/EventCard'
import React from 'react'
import Link from 'next/link'
import { Title } from '@/components'
function Events() {
  return (
    <div>
      <Title name={"All Events"} classes={"text-center"} />
      <div className="flex justify-center items-center">
      <Link href={'/events/addevent'}  className=" w-[170px] h-[170px] rounded-2xl shadow-2xl bg-green-300 flex flex-col justify-center items-center ">
  <div className="text-[130px] font-extrabold text-black">+</div>
</Link>


      </div>

<div className="flex flex-row flex-wrap justify-around items-center">
<EventCard />
      <EventCard />
      <EventCard />
      <EventCard />

</div>
  
      
    </div>
  )
}

export default Events
