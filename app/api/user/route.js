import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import bcrypt from 'bcrypt'
// for the inser the user in database

export const POST = async(req)=>{
    const {  username ,
    password ,
    email ,
    dropdown} = await req.json();

// for bcrypit
const saltRounds = 10;
const text_password = password;
// passwordhash
const haspass =await bcrypt.hash(text_password, saltRounds)
    console.log({username , haspass ,dropdown})
try {
    await connectToDB() ;
    console.log("Database connected Sucesssully")
const check = await User.findOne({username})
if(check){
    return new Response(JSON.stringify({msg:"This username has already taken" , ok:true , type:"warning"}) , {status:200})


}

    const user = await new User({username , password:haspass ,email, dropdown:dropdown})

    await user.save() ;
    console.log(user)
return new Response(JSON.stringify({msg:"Account Creation SuccessFully!" , type:"success", ok:true}) , {status:200})

} catch (error) {
console.log(error)
// console.log(error)
const err = []
if(error?.errors){
    const object = error.errors
    for (const key in object) {
        const value = object[key];
err.push((`${key} :${value.message} `))

       }
        const errtext = err.join('\n')
       return new Response(JSON.stringify({msg:"Failed to fetch the data for user" ,error:errtext, type:'error',ok:false}))

}
    return new Response(JSON.stringify({msg:"Failed to fetch the data for user" ,error:error, type:'error',ok:false}))
}

}