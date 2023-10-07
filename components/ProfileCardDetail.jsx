import React from 'react'
import { Title } from '.'
import Image from 'next/image'
import {GrFacebookOption} from 'react-icons/gr'
import {BiLogoLinkedin} from 'react-icons/bi'
import {IoLogoInstagram} from 'react-icons/io'
import Link from 'next/link'
function ProfileCardDetail({isFetching}) {
  return (
    <div className=''>

     <div className="">
      <div className="">
        <Title name="Schologamma Forum" classes={"text-center"}   ></Title>
        <div name="" className={"text-[24px] font-semibold text-cyan-400 text-center"}>TechSpot Committe</div>
        <h3 className="text-[16px] font-semibold text-gray-400  text-center">Member</h3>
      </div>
      {/* profile photo and info */}
      <div className="flex justify-center items-center ">
  
        <div className="mt-[70px] shadow-2xl relative">
        <div className={` ${isFetching?'block':'hidden'} rounded-tl-[200px] w-[100%] h-[100%] rounded-br-full absolute top-0 left-0 right-0 bottom-0 z-[2] bg-red-400 `}></div>
      <div className="w-[800px] h-auto bg-white rounded-tl-full  relative flex  justify-center  ">
<div className="w-[350px] h-[350px] rounded-full goldencss relative shadow-inner ">
<div className="w-[300px] h-[300px] rounded-full bg-slate-500 absolute top-[15px] left-[20px] shadow-xl "></div>

</div>
{/* imfoermation the detail */}
<div className=" ">
<div className="mt-[70px] ml-[30px]">
<h2 className='text-gray-700 font-extrabold text-[20px] '>Personal Information :</h2>
<div className="grid grid-cols-2 w-[450px] text-slate-600">
<span className=''>Name :</span>
<span>Harish Hedau</span>

<span>DOB :</span>
<span>14/11/2003</span>

<span>B-Tech ID :</span>
<span>BT210033CS</span>

<span>Year Study</span>
<span>3rd Year</span>


</div>

</div>

{/* other informaTIOPN CARD START HERE FOR SOCIAL MEDAIA */}
<div className="flex flex-row  justify-center space-x-5 mt-[30px] ">
  {/* FACEBOOK , LINKEDDIN  , INSTAGRAM */}
  <Link href={'/'}  className='cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full text-[20px] bg-blue-400 text-black'><GrFacebookOption /></Link>
  <Link href={'/'} className='cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full text-[20px] bg-blue-300 text-black'><BiLogoLinkedin /></Link>
  <Link href={'/'} className='cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full text-[29px] bg-pink-500 text-black'><IoLogoInstagram /></Link>

</div>

{/* <div className="w-[600px] h-[500px] rounded-tl-full bg-red-300 shadow-lg ">hey hi</div> */}
</div>
      </div>
      {/* create the back page here ... */}
      <div className="h-[350px] w-[800px] bg-slate-500 rounded-br-full mb-[30px] flex flex-row justify-between">
{/* left side */}
<div className="">
<div className="grid grid-cols-2 text-white w-[350px] ml-[40px] pt-[30px]">
  <span >Hobby :</span>
  <span >Listenig Song</span>
  <span >Skill :</span>
  <span >Java , Python , C++ :</span>


</div>

{/* summary of me */}
<div className=" text-white w-[300px] ml-[40px] pt-[30px]">
  <h3 className='font-extrabold'>About me :</h3>
  <p  className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, earum. Quas natus tempora, minima error deserunt laborum ab labore obcaecati? Facere neque exercitationem obcaecati quae aspernatur cumque sit atque. Numquam!</p>
</div>
</div>
{/* right side */}
<div className="">
  {/* QR code image */}
  <div className="w-[180px] h-[180px] bg-white mr-[100px] mt-[40px] p-3 shadow-lg">
  <img src="https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/teamcardetail/321321312&amp;size=100x100" alt="" className='w-full h-full' title="" />
  </div>
</div>
      </div>
      </div>
      </div> 
      </div>
    </div>
  )
}

export default ProfileCardDetail
