"use client" ;

import { useState } from "react";


import { CommButton } from "@/components";

export const committeeList = [ "Admin", "Content Editor Committee", "Creative Committee", "Sport Committee", "Publicity Committee","Discipline Committee", "Event Committee", "Technical Committee" ,"TechSpot Committee", "Digital Committee"
]

export const ForumPostList =  [ "Member" , "President" ,"Vice-President" ,"Secretary", "Treasurer","Spoke Person","Head" ,"Co-Head"]


// Profile card detail Form
export const  profilecardDetailForm = [
    {
        name:"name" ,
        placeholder :"Enter your Name" ,

        value :"" ,
        type:"text",
        
    }
,
{
    name:"BT_ID" ,
    placeholder :"Enter your BTech-ID" ,

    value :"" ,
    type:"text",
    
}
,
{
    name:"DOB" ,
        placeholder :"Enter your Date Of Birth" ,
        value :"" ,
    type:"date",
    
}
,
{
    name:"position" ,
    placeholder :"Enter your role in Forum" ,

    value :"" , //ex: member /Head / Co-Head /presisdent
    type:"dropdown",
    dropDown:ForumPostList
    
}
,
{
    name:"type" ,
    placeholder :"Enter your Committee or Admin" ,

    value :"" , //ex: techspot committee  /Admin
    type:"dropdown",
    dropDown:committeeList
    
}
,
{
    name:"linkedinUrl" ,
    placeholder :"Enter the Linkdin Url",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}
,
{
    name:"facebookUrl" ,
    placeholder :"Enter the facebook Url",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}
,
{
    name:"instragramUrl" ,
    placeholder :"Enter the instragram Url",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
},
{
    name:"currentYear" ,
    placeholder:"Enter the Current Year of study",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"dropdown",
    dropDown :["3","2" ,"4"]
    
},
{
    name:"cgpa" ,
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}

,
{
    name:"hobby" ,
    placeholder:"Enter your hobby :",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}
,
{
    name:"skill" ,
    placeholder:"Write your Skill here :",
    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}
,
{
    name:"description" ,
    placeholder :"Enter the Summery about you :" ,

    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
}
,
{
    name:"photoUrl" ,
    placeholder :"upload the image here :" ,

    value :"" , //ex: member /Head / Co-Head /Admin
    type:"text",
    
},

]

// committe form link
export const  CommitteeForm = [
    {
        name:"name" ,
        placeholder:"Enter the name of Committte :",
        value :"" , //ex: member /Head / Co-Head /Admin
        type:"text",
        
    },
    {
        name:"email" ,
        placeholder:"Enter your Email",
        value :"" , //ex: member /Head / Co-Head /Admin
        type:"text",
        
    },
    {
        name:"description" ,
        placeholder:"Enter the Description about Committee",
        value :"" , //ex: member /Head / Co-Head /Admin
        type:"text",
        
    },
    {
        name:"username" ,
        placeholder:"Enter your UserName" , 
        value :"" , //ex: member /Head / Co-Head /Admin
        type:"text",
        
    },
    {
        name:"password" ,
        placeholder:"Enter your Password :",
        value :"" , //ex: member /Head / Co-Head /Admin
        type:"password",
        
    },
    {
        name:"cpassword" ,
        placeholder:"Confirm your Password :",

        value :"" , //ex: member /Head / Co-Head /Admin
        type:"password",
        
    },
    {
        name:"photo" ,
        placeholder:"Upload your Committe Logo :",

        value :"" , 
        type:"file",
    }
] ;

