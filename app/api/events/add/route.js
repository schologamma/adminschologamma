import { connectToDB } from '@/utils/database';
// import   from '@/models/committee';
import Events from '@/models/events'
import bcrypt from 'bcrypt'
// for the inser the user in database

export const POST = async(req)=>{
    const data= await req.json();
    const {name } =data
    // delete data.cpassword ;  //for delete the conform password preopery
    // name:"",
    // type:"",
    // organizer:"",
    // sdate :"",
    // edate:"",
    // venue:"",
    // poster:"",
    // description:"",
    // joinLink:""
// const saltRounds = 10;
// const text_password = password;
// passwordhash
// const haspass =await bcrypt.hash(text_password, saltRounds)
    // console.log({username , haspass ,dropdown})
try {
    await connectToDB() ;
    console.log("Database connected Sucesssully")
const check = await Events.findOne({name:name })
if(check){
    return new Response(JSON.stringify({msg:"This name of event already exsit !" , ok:true ,type:"warning"}) , {status:200})


}
console.log("im in  event route js")
// E:\learing code\schologamma\admin\app\api\committee\add\route.js

    const events = await new Events({...data   })

    await events.save() ;
    console.log(events)
return new Response(JSON.stringify({msg:"New Committee has been created SuccessFully ", type:"success" , ok:true}) , {status:200})

} catch (error) {
// console.log(error)
return new Response(JSON.stringify({msg:"Failed to fetch the data for user",error:error , type:'error',ok:false}))

}

}