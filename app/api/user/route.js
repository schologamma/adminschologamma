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
    return new Response(JSON.stringify({msg:"THis username has already taken" , ok:true}) , {status:200})


}

    const user = await new User({username , password:haspass ,email, dropdown:dropdown})

    await user.save() ;
    console.log(user)
return new Response(JSON.stringify({...user , ok:true}) , {status:200})

} catch (error) {
console.log(error)
console.log(error)
    return new Response(JSON.stringify("Failed to fetch the prompt for user"))
}

}