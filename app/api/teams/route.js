import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';
export const GET = async(req )=>{

// for fetch the list of year

    try {
        await connectToDB() ;
        console.log("Database connected Sucesssfully")
    
    const check = await Teams.find({} ,'year')
   
    return new Response(JSON.stringify({msg:"Data Teams fetch successFully" ,data:check , ok:true}) , {status:200})
    
    } catch (error) {
    console.log(error)
    console.log(error)
        return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the prompt for user"}))
    }
    
    }