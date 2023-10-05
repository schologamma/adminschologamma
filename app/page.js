
"use client"
import Image from 'next/image'
import {Teams ,
  Nav,
  Committe,
Hero } from '@/components'
import { useContext  , useEffect} from 'react';
import DataContext from '@/context/data/DataContext';
import { useRouter } from 'next/navigation';
// import RawLog
// import { useSession } from '@/context/session/SessionContext'
export default function Home() {

  const router = useRouter()
  const dd = useContext(DataContext) ;
 
  useEffect(() => {
    if(dd.auth.user ===false){
      return router.push('/join/login')
        }
  
   
  }, [dd.auth])
  

  // const { state, dispatch } = useSession();
  return (
    <main className="" >
<Hero />
    </main>
  )
}
