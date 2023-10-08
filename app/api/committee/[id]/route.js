import { connectToDB } from '@/utils/database';
import  Committee from '@/models/committee';



export const GET = async (req, {params})=>{

    console.log(params.id)

    try {
        await connectToDB()
     
        console.log("Data base conected successFully")
     
        const committee = await Committee.findById(params.id).select("-password");
     console.log(committee)

     return   committee ? new Response(JSON.stringify({data:committee, msg:"data fetch by id Successfully" , type:"success" , ok:true}) , {status:200}) :new Response(JSON.stringify({data:committee, msg:"Incorrect id you entered" , type:"success" , ok:true}) , {status:200})
        
    
     
     
     } catch (error) {
     return new Response(JSON.stringify({ msg:" Error occured in data fetch from server" , type:"success" , ok:false}) , {status:200})
         
     }



}



export const DELETE = async (req, {params})=>{

    console.log(params.id)

    try {
        await connectToDB()
     
        console.log("Data base conected successFully")
     
        const committee = await Committee.findByIdAndDelete(params.id);
     console.log(committee)
     return new Response(JSON.stringify({data:committee, msg:"Committee Deleted SuccessFully" , type:"success" , ok:true}) , {status:200})
        
     
     
     
     } catch (error) {
     return new Response(JSON.stringify({ msg:" Error occured in data fetch from server" , type:"success" , ok:false}) , {status:200})
         
     }



}