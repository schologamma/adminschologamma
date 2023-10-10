import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';
export const GET = async(req )=>{

// for fetch the list of year

    try {
        await connectToDB() ;
        console.log("Database connected Sucesssfully")
    
    const check1 = await Teams.find({} ,'year')
   
    return new Response(JSON.stringify({msg:"Data Teams fetch successFully" ,data:check1 , ok:true}) , {status:200})
    
    } catch (error) {
    console.log(error)
    console.log(error)
        return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the prompt for user"}))
    }
    
    }

    // for delete the tema person 
    // export const  = async(req ,{params} )=>{

    //     const data =await req.json()
    // const {_id} = data
    //     // const 
     
    //     try {
    //         await  connectToDB()
    //         console.log("Data base connect sucessFully")
      
    //         const checkOld = await Teams.findOne({year:params.year})
    //   if(!checkOld){
    //       return new Response(JSON.stringify({ msg:"This bt teams  are not  exist!" , type:"warning" , ok:false}) , {status:200})
      
    //   }
    
      
    //   console.log(checkOld)
      
      
    //   const filterData = checkOld.data.filter(item => item._id !== _id);
    
    // if(filterData.length === checkOld.data.length){
    //     return new Response(JSON.stringify({ msg:"This _id are not exist !" , type:"error" ,error:error , ok:false}) , {status:200})
    
    // // }
    //   const profile = await Teams.findOneAndUpdate({_id:checkOld._id}, { $set: { data: filterData } } )
    // if(!profile){
    //     return new Response(JSON.stringify({ msg:"call error 12" , type:"error" ,error:error , ok:false}) , {status:200})
    
    // }
      
    //   return new Response(JSON.stringify({ msg:"Data deleted successFully based on their BT_ID!" , data:foundObject, type:"success" , ok:true}) , {status:200})
    
     
      
    //       } catch (error) {
    //       return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
              
    //       }
          
    // }