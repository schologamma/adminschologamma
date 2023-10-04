'use client'
import Link from "next/link";
import { useContext, useState } from "react";
import DataContext from '@/context/data/DataContext';
import { useRouter } from 'next/navigation';

const Nav =()=>{

  const dd = useContext(DataContext)

    const {auth ,setAuth } =dd
    const LogOut =()=>{
  setAuth({user:false , authtoken:null})
  console.log(auth.user)
}
    return <nav className="bg-red-500 text-white">
       <div className="navbar ">
  <div className="flex-1">
    <Link href={'/'} className="btn btn-ghost normal-case text-xl">Schologamma Admin Pannel</Link>
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
        <details>
          <summary>
            Profile
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <button className="btn btn-error  text-white rounded-lg shadow-lg cursor-pointer" onClick={()=>LogOut()}>LogOut</button>
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