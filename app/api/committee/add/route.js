import { connectToDB } from '@/utils/database';
import  Committee from '@/models/committee';
import bcrypt from 'bcrypt'
// for the inser the user in database

export const POST = async(req)=>{
    const data= await req.json();
    const {name  ,password ,username} =data
    delete data.cpassword ;  //for delete the conform password preopery
    // name:"",
    // email:"",
    // description:"",
    // password:"",
    // cpassword:"",
    // username:"",
    // photo:null
// for bcrypit
const saltRounds = 10;
const text_password = password;
// passwordhash
const haspass =await bcrypt.hash(text_password, saltRounds)
    // console.log({username , haspass ,dropdown})
try {
    await connectToDB() ;
    console.log("Database connected Sucesssully")
const check = await Committee.findOne({username ,name })
if(check){
    return new Response(JSON.stringify({msg:"This username  or committee already exsit !" , ok:true ,type:"warning"}) , {status:200})


}

    const committee = await new Committee({...data  , password:haspass })

    await committee.save() ;
    console.log(committee)
return new Response(JSON.stringify({msg:"New Committee has been created SuccessFully ", type:"success" , ok:true}) , {status:200})

} catch (error) {
// console.log(error)
return new Response(JSON.stringify({msg:"Failed to fetch the data for user",error:error , type:'error',ok:false}))

}

}