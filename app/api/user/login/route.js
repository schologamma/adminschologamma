import { connectToDB } from '@/utils/database';
import User from '@/models/user';
import bcrypt from 'bcrypt'
// for the inser the user in database


// for jsonwebtoken
import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET
export const POST = async(req)=>{
    const {  username ,
    password ,
     
    type} = await req.json();

// for bcrypit
const saltRounds = 10;
const text_password = password;
// passwordhash
// const haspass =await bcrypt.hash(text_password, saltRounds)
    // console.log({username , haspass})
try {
    await connectToDB() ;
    console.log("Database connected Sucesssully")

    const user = await User.findOne({ username: username})
    console.log(user)
if(!user){
    return new Response(JSON.stringify({ ok:false , msg:"Invalid Crendential !" ,type:"warning"}) , {status:500})

}

   const check = await bcrypt.compare(password, user.password);
   if(!check){
    return new Response(JSON.stringify({ ok:false , msg:"Invalid Crendential !" ,type:"warning"}) , {status:500})

   }

  const userid = {id: user._id}
  console.log("login",userid)

//   creating the toekn here
const token =await jwt.sign(userid ,SECRET)

console.log(token)

    // const user = await new User({username , password:haspass , dropdown})

    // await user.save() ;
    // console.log(user)
return new Response(JSON.stringify({token:token ,msg:"Login successfully", ok:true, type:"sucess"}) , {status:200})

} catch (error) {
console.log(error)
console.log(error)
    return new Response(JSON.stringify("Failed to fetch the prompt for user"))
}

}