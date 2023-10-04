// "use client"
import Link from "next/link";
import { Title } from ".";

const CommitteCard = ({css})=>{
    return (
        <div className="flex flex-col justify-center items-center m-[20px]">

        <Link href={'/committee/view/23213'} className={`${css?css:""}`}>
            <div className="w-[250px] h-[250px] rounded-full gol shadow-2xl platinumcss flex justify-center items-center">
            <div className="w-[210px] h-[210px] rounded-full bg-gray-600 ">
</div>
            </div>
        </Link>
            
            <div className=" bg-red-700 text-white font-extrabold  shadow-xl flex justify-center items-center w-[300px] px-[4px] text-[22px] rounded-full py-[5px]"><h1>TechSpot Committee</h1></div>
        </div>
    )
}

const AddCommitteBtn = ()=>{
    return (
        <div className="flex flex-col justify-center items-center ">

        <Link href={'/committee/addcommittee'} className="">
            <div className="w-[250px] h-[250px] rounded-full gol shadow-2xl platinumcss flex justify-center items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-gray-600 flex flex-col justify-center items-center  ">
                <h1 className="text-[170px] font-extrabold text-green-400 drop-shadow-lg">+
                    </h1>
                  
</div>
            </div>
        </Link>
        </div>

    )
}
const Committe =()=>{
return <div>
    <Title name={"All Committies in Forum"} classes={"text-blue-400 text-center"}></Title>
    <div className="flex justify-center items-center flex-wrap ">
    <AddCommitteBtn/>

    </div>

    <div className="flex justify-around items-center flex-wrap">
    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 */}
    <CommitteCard className={""} css="" />
    <CommitteCard />
    <CommitteCard />
    <CommitteCard />
    <CommitteCard />
    <CommitteCard />
    <CommitteCard />
    <CommitteCard />
    </div>
   
    
    
    </div> 
}
export default Committe ;