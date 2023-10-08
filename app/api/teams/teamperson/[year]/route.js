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

// for update the profile tha are already created

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
console.log(data)
const dataOld = checkOld.data 
const newData = dataOld.filter(item => item.BT_ID !== BT_ID);

// const oldObj = dataOld.find((item)=>item.BT_ID ===BT_ID) 
// const objNew = {...oldObj , data}
const dataNew = [...newData , data] 

console.log(dataNew)
console.log(checkOld)
try {
    

const profile = await Teams.findOneAndUpdate({_id:checkOld._id}, { $set: { data: dataNew } } )
if(!profile){
    return new Response(JSON.stringify({ msg:"call error 12" , type:"error" ,error:error , ok:false}) , {status:200})

}
console.log(profile)
return new Response(JSON.stringify({ msg:"Your data has been updated sucessfully" ,data:profile, type:"success" , ok:true}) , {status:200})

} catch (error) {
    return new Response(JSON.stringify({ msg:"call error 11" , type:"error" ,error:error , ok:false}) , {status:200})
    
}

    } catch (error) {
    return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
        
    }
    
    
    
    }

export const DELETE = async(req ,{params} )=>{

    const data =await req.json()
const {_id}= data
    // const 
 
    try {
        await  connectToDB()
        console.log("Data base connect sucessFully")
  
        const checkOld = await Teams.findOne({year:params.year})
  if(!checkOld){
      return new Response(JSON.stringify({ msg:"This bt teams  are not  exist!" , type:"warning" , ok:false}) , {status:200})
  
  }

  
  console.log(checkOld)
  
  
  const filterData = checkOld.data.filter(item => item._id !== _id);

// if(filterData.length === checkOld.data.length){
//     return new Response(JSON.stringify({ msg:"This _id are not exist !" , type:"error" ,error:error , ok:false}) , {status:200})

// }
  const profile = await Teams.findOneAndUpdate({_id:checkOld._id}, { $set: { data: filterData } } )
if(!profile){
    return new Response(JSON.stringify({ msg:"call error 12" , type:"error" ,error:error , ok:false}) , {status:200})

}
  
  return new Response(JSON.stringify({ msg:"Data deleted successFully based on their BT_ID!" , data:foundObject, type:"success" , ok:true}) , {status:200})

 
  
      } catch (error) {
      return new Response(JSON.stringify({ msg:"call error" , type:"error" ,error:error , ok:false}) , {status:200})
          
      }
      
}