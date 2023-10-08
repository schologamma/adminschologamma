// fetch the data according to the event id

import { connectToDB } from '@/utils/database';
// import Teams from '@/models/teams';
import Events from '@/models/events';
export const GET = async(req , {params} )=>{


    try {
        await connectToDB() ;
        console.log("Database connected Sucesssfully")
    
    const check = await Events.find( {organizer:params.id})
    if(check.length===0){
        return new Response(JSON.stringify({msg:"no event found in this committee" , ok:false}) , {status:200})

    }
   
    return new Response(JSON.stringify({msg:"Data events fetch successFully" ,data:check , ok:true}) , {status:200})
    
    } catch (error) {
    console.log(error)
    console.log(error)
        return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the data for user"}))
    }
    

}
