import {Teams ,
    Committe,
  } from '@/components'
import {sectionLinks} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

import {CgCommunity} from 'react-icons/cg'

const LinkCard = ({name , path , logo})=>{
  return (
    <Link href={`${path}`} className='w-[300px] h-[300px]   rounded-3xl flex flex-col justify-center items-center  relative shadow-2xl'>
<div className="bg-white opacity-5  absolute top-0  left-0 right-0 bottom-0 rounded-3xl   z-[-1]"></div>
  <div >

<Image src={logo} width={150} height={150} alt='no defined' className='bg-red-500 text-green-300 '/>
<div className=" text-center text-3xl font-bold ">{name}</div>
  </div></Link>)
}
const Hero =()=>{
    return <section className='flex flex-row justify-around items-center flex-wrap h-[90vh]'>
    {
sectionLinks.map((item , index)=>(
  <LinkCard {...item} key={item.name+index}/>
))

    }
    </section> 
    }
    export default Hero ;