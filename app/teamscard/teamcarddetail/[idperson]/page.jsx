"use client" ;
import ProfileCardDetail from '@/components/ProfileCardDetail'
import React ,{useState ,useEffect}  from 'react'
import { useRouter ,useSearchParams } from 'next/navigation';

function TeamCarddetail({params}) {
  const searchParams = useSearchParams()
  const year = searchParams.get('year')

// console.log(search)
const [isFetching , setIsFetching] =useState(true)
  const [userData , setUserData] = useState({})
useEffect(() =>  {
  // if( userData.keys({}).length===0) {
    console.log("hi im here")
 const fetchData = async()=>{
  const res = await fetch(`/api/teams/teamperson/${year}` ,{method:"POST" , body:JSON.stringify({BT_ID:params.idperson})})
  const data = await res.json()
data.ok && setIsFetching(false)
  console.log("ima fetch inital data")
  console.log(data)

  data.ok && setUserData(data.data)

  // }
 
   console.log("im fetch from database")
   console.log()
  
 } 
 fetchData()

}, [])

  return (
    <div>
      <ProfileCardDetail  isFetching={isFetching}/>
    </div>
  )
}

// TeamCarddetail.getInitialProps = async ({ query }) => {
//   const {year} = query

//   return {year}
// }

export default TeamCarddetail

