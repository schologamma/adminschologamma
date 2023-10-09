import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';
import bcrypt from 'bcrypt'
// for the inser the user in database

// for insert the new year
export const POST = async(req,{params} )=>{


try {
    await connectToDB() ;
    console.log("Database connected Sucesssfully")

const check = await Teams.findOne({year:params.year})
if(check){
    return new Response(JSON.stringify({msg:"This year teams already exist !" , ok:false}) , {status:200})


}

    const team = await new Teams({year:params.year})

    await team.save() ;
    console.log(team.data)
return new Response(JSON.stringify({msg:"new team created successFully" ,data:team, ok:true}) , {status:200})

} catch (error) {
console.log(error)
console.log(error)
    return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the prompt for user"}))
}

}


// for fetch the data according to the year
export const GET = async(req,{params} )=>{


try {
    await connectToDB() ;
    console.log("Database connected Sucesssfully")

const check = await Teams.findOne({year:params.year})
if(!check){
    return new Response(JSON.stringify({msg:"Team for "+params.year+" are not exist!" , ok:false}) , {status:200})
}
   
return new Response(JSON.stringify({msg:"Data fetch successFully" ,data:check.data , ok:true}) , {status:200})

} catch (error) {
console.log(error)
console.log(error)
    return new Response(JSON.stringify({ ok:false  , error:error,msg:"Failed to fetch the prompt for user"}))
}

}

// update the teams according to the year 
export const PUT = async(req ,{params} )=>{





    const data =await req.json() ;

    const {BT_ID} = data
    


    try {
      await  connectToDB()
      console.log("Data base connect sucessFully")

      const checkOld = await Teams.findOne({year:params.year})
if(!checkOld){
    return new Response(JSON.stringify({ msg:"This bt teams  are not  exist!" , type:"warning" , ok:false}) , {status:200})

}
// writew the cod eofr thecheck bt id

function findByBTId(data, btId) {
    return data.find(item =>item.BT_ID === btId)
}

const dataOld = checkOld.data 
const findID = findByBTId(dataOld , BT_ID)
console.log(findID)
if(findID){
    return new Response(JSON.stringify({ msg:"This BTID are already  exist!" , type:"warning" , ok:false}) , {status:200})

}
const dataNew = [...dataOld , data] 

console.log(dataNew)
console.log(checkOld)
try {
    

const profile = await Teams.findOneAndUpdate({_id:checkOld._id}, { $set: { data: dataNew } } )
if(!profile){
    return new Response(JSON.stringify({ msg:"call error 12" , type:"error" ,error:error , ok:false}) , {status:200})

}
console.log(profile)
return new Response(JSON.stringify({ msg:"Your data has been added sucessfully" ,data:profile, type:"success" , ok:true}) , {status:200})

} catch (error) {
    return new Response(JSON.stringify({ msg:"call error 11" , type:"error" ,error:error , ok:false}) , {status:200})
    
}

    } catch (error) {
    return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
        
    }
    
    
    
    }

  