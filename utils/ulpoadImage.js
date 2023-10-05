export const uploadImage =async (imagePath) => {
 
    try{
  const responce = await fetch(`/api/upload`,{
    method:"POST",
    body:JSON.stringify({path:imagePath})
  
  });
  
  console.log("im in uploadimage.js")
  return responce.json();
  
    }catch(error){
      // console.log(error)
      throw error
    }
  }

//   import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 

// });