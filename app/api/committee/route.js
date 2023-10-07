// for fetching the committee list 
import { connectToDB } from '@/utils/database';
import  Committee from '@/models/committee';
export const GET = async(req)=>{
    // const data= await req.json();
try {
   await connectToDB()

   console.log("Data base conected successFully")

   const committee = await Committee.find({}, 'name _id photo');
console.log(committee)
return new Response(JSON.stringify({data:committee, msg:"data fetch from server" , type:"success" , ok:true}) , {status:200})
   



} catch (error) {
return new Response(JSON.stringify({ msg:" Error occured in data fetch from server" , type:"success" , ok:false}) , {status:200})
    
}

}


// here for delete the committee 

// export const DELETE = async(req)=>{
//     const data= await req.json();
// const {_id} = data
//     try {
//         await connectToDB()
     
//         console.log("Data base conected successFully")
     
//         const committee = await Committee.findByIdAndDelete(_id);
//      console.log(committee)
//      return new Response(JSON.stringify({data:committee, msg:"Committee Deleted SuccessFully" , type:"success" , ok:true}) , {status:200})
        
     
     
     
//      } catch (error) {
//      return new Response(JSON.stringify({ msg:" Error occured in data fetch from server" , type:"success" , ok:false}) , {status:200})
         
//      }


// }
