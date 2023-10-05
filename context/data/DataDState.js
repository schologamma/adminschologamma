"use client" ;
import DataContext from "./DataContext";
import { useState ,useEffect } from "react";
const DataState = (props)=>{

    const [auth, setAuth] = useState(() => {
        // Try to retrieve auth from sessionStorage when the component mounts
        // if (typeof window !== 'undefined') 
        const storedAuth = sessionStorage.getItem("auth");
        return storedAuth
          ? JSON.parse(storedAuth)
          : {
              user: false,
              authtoken: null,
            };
        
      });
   const [alert,setAlert] = useState({type:null, msg:""})
    const data = {
        name:"harish"
    }
const setAlertFunc = (type , msg)=>{
    setAlert({type:type , msg:msg})
    console.log("call in context api")
    
}

  // Store auth in sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
// for logout and destorythe function
const logout = () => {
    // Clear the auth data from sessionStorage and set auth state to initial values
    
    sessionStorage.removeItem("auth");
    setAuth({
      user: false,
      authtoken: null,
    });
  };
    return (
        <DataContext.Provider value= {{data:data , auth:auth ,setAuth:setAuth  , alert:alert ,setAlert:setAlert, setAlertFunc:setAlertFunc ,logout:logout}}>
            {props.children}
        </DataContext.Provider>
    )

}


export default DataState
