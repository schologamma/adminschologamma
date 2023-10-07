import { connectToDB } from '@/utils/database';
import Teams from '@/models/teams';
export const POST = async(req ,{params} )=>{

    const data  = await req.json() ;
    
    const {BT_ID} = data
    
        
      
            
        
        
            try {
              await  connectToDB()
              console.log("Data base connect sucessFully")
        
              const checkOld = await Teams.findOne({year:params.year})
        if(!checkOld){
            return new Response(JSON.stringify({ msg:"This bt teams  are not  exist!" , type:"warning" , ok:false}) , {status:200})
        
        }

        
        console.log(checkOld)
        
        
        const foundObject = checkOld.data.find(item => item.BT_ID === BT_ID);
        
        return new Response(JSON.stringify({ msg:"Data fetch successFully based on their BT_ID!" , data:foundObject, type:"success" , ok:true}) , {status:200})
    
       
        
            } catch (error) {
            return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
                
            }
            
            
            
            }