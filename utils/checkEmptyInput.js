 const checkEmptyInput = (object) =>{
    const arr =[]
    for (const key in object) {
      const value = object[key];
if(value ===''||value?.length ===0 ||value ===null){
arr.push(key)
}
     }
     return arr
   }

   export default checkEmptyInput