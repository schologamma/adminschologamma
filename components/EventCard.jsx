
   import {FaRegEdit} from 'react-icons/fa'
   import {RiDeleteBin6Fill} from 'react-icons/ri'
   import Link from 'next/link';
  export default function EventCard() {
    return (
      <div className="mt-[30px] my-[24px]">
        <div class="relative flex w-[300px] flex-col rounded-xl bg-red-50 bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="img-blur-shadow"
      layout="fill"
    />
 <span className="absolute w-fit p-1 text-[10px] rounded-full bottom-0 right-0   bg-red-600 text-red-50 font-bold ">TechSpot Committe</span>

  </div>

  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Event NAme
    </h5>
    <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque fugit et voluptatem nam voluptatibus ex quis sequi dolores .</div>
    <div className="grid grid-cols-2 ">
 <div className="flex flex-col justify-center rounded-3xl items-center bg-green-300 shadow-xl p-2 mr-2">
 <span className="text-[10px] font-semibold">Sart:</span>
 <span className="font-extrabold text-sm">22/22/2023</span>
 </div>

<div className="flex flex-col justify-center rounded-3xl items-center bg-red-300 shadow-xl p-2 ml-2">
<span className="text-[10px] font-semibold">End:</span>
 <span className="font-extrabold text-sm">32/22/2023</span>
</div>
    </div>
  </div>
  <div class="p-6 pt-0 flex justify-between  items-center ">
    <button
      class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
    <div className="flex justify-center items-center space-x-2">
    <button className='bg-blue-300 rounded-lg hover:bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-[25px]'><Link className="p-2" href={'/events/update/23231'}  ><FaRegEdit color='white'  className=''/></Link></button>
    <button className='bg-red-300 rounded-lg hover:bg-red-500 w-[40px] h-[40px] flex justify-center items-center text-[25px]'><Link href={'/'} className='p-2'><RiDeleteBin6Fill/></Link>
    </button>
    </div>
    
  </div>
</div>
      </div>
    );
  }