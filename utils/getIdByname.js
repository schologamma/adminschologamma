export function getIdByName(nameToFind , data) {
    const foundObject = data.find(item => item.name === nameToFind);
    return foundObject ? foundObject._id : null;
  }
  
  export function getNameById(idtoFindName , data) {
    const foundObject = data.find(item => item._id === idtoFindName);
    return foundObject ? foundObject.name : null;
  }
  