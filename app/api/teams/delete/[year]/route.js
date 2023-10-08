import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';
// import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes';

export const POST = async(req ,{params} )=>{

    const data =await req.json()
const {BI_ID} = data
    // const 
 
    try {
        await  connectToDB()
        console.log("Data base connect sucessFully")
  
        const checkOld = await Teams.findOne({year:params.year})
  if(!checkOld){
      return new Response(JSON.stringify({ msg:"This bt teams  are not  exist!" , type:"warning" , ok:false}) , {status:200})
  
  }

  
//   console.log(checkOld)
  const data1 = checkOld.data

  function filterByBTId(data, btId) {
    return data.filter(item => item.BT_ID !== btId);
}

  
  const filterData = filterByBTId(data1 , BI_ID)
  // const filterData = data1.filter(item => item.BI_ID !== BI_ID);
// 
console.log("filter data")
  console.log(filterData)
// if(filterData.length === data1?.length){
//     return new Response(JSON.stringify({ msg:"This _id are not exist !" , type:"error" ,error:error , ok:false}) , {status:200})

// }
  const profile = await Teams.findOneAndUpdate({_id:checkOld._id}, { $set: { data: filterData } } )
if(!profile){
    return new Response(JSON.stringify({ msg:"call error 12" , type:"error" ,error:error , ok:false}) , {status:200})

}
  
  return new Response(JSON.stringify({ msg:"Data deleted successFully based on their BT_ID!" , data:profile, type:"success" , ok:true}) , {status:200})

 
  
      } catch (error) {
      return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
          
      }
      
}