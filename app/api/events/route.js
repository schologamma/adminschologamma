// for fetching the all data of events

import { connectToDB } from '@/utils/database';
// import Teams from '@/models/teams';
import Events from '@/models/events';
export const GET = async(req )=>{

// for fetch the list of year

    try {
        await connectToDB() ;
        console.log("Database connected Sucesssfully")
    const check = await Events.find({})
    if(!check){
    return new Response(JSON.stringify({msg:"Data events are not successFully" ,data:check , ok:false}) , {status:200})

    }
    
    // const check = await Events.find({}).populate('organizer','name photo')
   
    return new Response(JSON.stringify({msg:"Data events fetch successFully" ,data:check , ok:true}) , {status:200})
    
    } catch (error) {
    console.log(error)
    console.log(error)
        return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the data for user"}))
    }
    
    }

    export const POST = async(req)=>{
        const data= await req.json();
        // const {name   ,username  } =data
        delete data.organizer ;  
        // delete data.password ;  
        const _id = data._id
        delete data._id ;  //for delete the conform password preopery
        
     
    
    
        // console.log({username , haspass ,dropdown})
    try {
        await connectToDB() ;
        console.log("Database connected Sucesssully")
    const check = await Events.findById(_id)
    if(!check){
        return new Response(JSON.stringify({msg:"THis event are not found!" , ok:true ,type:"warning"}) , {status:200})
    
    
    }
    console.log("ok from my side")
    
    // write your updateData query  code here ...
    const committee = await Events.findOneAndUpdate({_id:_id} , {...data});
    
        // await committee.save() ;
        console.log(committee)
        const updateData = await Events.find({})
    return new Response(JSON.stringify({msg:" Event has been updated  SuccessFully ", data:updateData,  type:"success" , ok:true}) , {status:200})
    
    } catch (error) {
    // console.log(error)
    return new Response(JSON.stringify({msg:"Failed to fetch the data for user",error:error , type:'error',ok:false}))
    
    }
    
    }
    
  