import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';

export const PUT = async(req  )=>{
const data =await req.json() ;

console.log(data)

return new Response(JSON.stringify({data:committee, msg:"call successfully" , type:"success" , ok:true}) , {status:200})


}