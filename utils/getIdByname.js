export function getIdByName(nameToFind , data) {
    const foundObject = data.find(item => item.name === nameToFind);
    return foundObject ? foundObject._id : null;
  }
  