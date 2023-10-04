"use client" ;
import DataContext from "./DataContext";
import { useState } from "react";
const DataState = (props)=>{

    const[auth , setAuth] =useState({
        user:false ,
        authtoken:null
    })
   
    const data = {
        name:"harish"
    }

    return (
        <DataContext.Provider value= {{data:data , auth:auth ,setAuth:setAuth}}>
            {props.children}
        </DataContext.Provider>
    )

}


export default DataState
