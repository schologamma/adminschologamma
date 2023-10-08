'use client'
import Link from "next/link";
import { useContext, useState } from "react";
import DataContext from '@/context/data/DataContext';
import { useRouter } from 'next/navigation';

const Nav =()=>{

  const dd = useContext(DataContext)

    const {auth ,setAuth ,logout } =dd
    const LogOut =()=>{
  setAuth({user:false , authtoken:null})
  console.log(auth.user)
}
    return <nav className="bg-red-500 text-white fixed w-[100vw] z-[29]  top-0 left-0 right-0">
       <div className="navbar ">
  <div className="flex-1">
    <Link href={'/'} className="px-2 py-[2px] normal-case text-md font-semibold ">S Admin Pannel</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    {!auth.user ?
    <>
      <li><Link href={'/join/login'}> Login</Link></li>
      <li><Link href={'/join/signin'}> SingIn</Link></li>
      </>
      :
      <>
      <li>
        profile
      </li>
      <button className="px-[6px] py-[2px]  text-white rounded-lg shadow-lg cursor-pointer hover:bg-red-600" onClick={()=>LogOut()}>logout</button>
      </>
      }
    </ul>
  </div>
</div>
    </nav> 
    }
    export default  Nav;
    

    // <div className="font-semibold text-lg">Schologamma Admin Pannel</div>
    // <div className="">
    //     {isLogin ?
    //     <div>
    //     <button>Profile</button>
    //     <button>LogOut</button>

    //     </div>
    // :
    // <button>Login</button>

    // }
        
    // </div>