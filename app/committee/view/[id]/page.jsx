import React from 'react'
import {EventCard, Title} from '@/components'
import {FiEdit} from 'react-icons/fi'
import Link from 'next/link'
function ViewCommittee({parmas}) {

    const committeeData ={
        name:"TechSpot",
        email:"techSpot@gami.com",
        description:"jhsdf fsdjkhfsdahjkasdfjnfsda sdfajksdfklfsdfsdafsdfsdf sdaffds dsfsdafdsaf sdfsda fsdf",
        password:"sdfs",
        cpassword:"sdfsd",
        username:"jhdfshjlksd",
        photo:"jkdshjds"

    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="w-[270px] h-[270px] rounded-full bg-red-400 flex justify-center items-center">
      <div className="w-[250px] h-[240px] rounded-full bg-gray-100">
</div>
      </div>
      <div className="flex flex-row justify-center items-center">
      <h1 className='font-semibold text-[22px] shadow-md text-orange-400'>{committeeData.name}</h1>
<Link href={'/committee/update/34324'}  ><FiEdit  className='p-2 bg-cyan-800 text-white text-[30px] shadow-lg rounded-full hover:bg-cyan-900'/></Link> 
      </div>
<div className="">{committeeData.description }</div>
<div className="">
<Title  name={"Our Committies Events"} classes={"text-center"}></Title>
<div className="flex flex-wrap justify-center items-center space-x-[20px]">
<EventCard />
<EventCard />
<EventCard />
<EventCard />

</div>
</div>
    </div>
  )
}

export default ViewCommittee
