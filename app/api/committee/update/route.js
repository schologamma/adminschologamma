import { connectToDB } from '@/utils/database';
import  Committee from '@/models/committee';
import bcrypt from 'bcrypt'
// for the inser the user in database

export const POST = async(req)=>{
    const data= await req.json();
    // const {name   ,username  } =data
    delete data.cpassword ;  
    delete data.password ;  
    const _id = data._id
    delete data._id ;  //for delete the conform password preopery
    
    //for delete the conform password preopery
    // name:"",
    // email:"",
    // description:"",
    // password:"",
    // cpassword:"",
    // username:"",
    // photo:null
// for bcrypit


    // console.log({username , haspass ,dropdown})
try {
    await connectToDB() ;
    console.log("Database connected Sucesssully")
const check = await Committee.findById(_id)
if(!check){
    return new Response(JSON.stringify({msg:"you havn't permission to access the committee!" , ok:true ,type:"warning"}) , {status:200})


}
console.log("ok from my side")

// write your updateData query  code here ...
const committee = await Committee.findOneAndUpdate({_id:_id} , {...data});

    // await committee.save() ;
    console.log(committee)
return new Response(JSON.stringify({msg:" Committee has been updated  SuccessFully ", data:committee,  type:"success" , ok:true}) , {status:200})

} catch (error) {
// console.log(error)
return new Response(JSON.stringify({msg:"Failed to fetch the data for user",error:error , type:'error',ok:false}))

}

}

// const committee = await new Committee.findByIdAndUpdate(_id , {...data  })
