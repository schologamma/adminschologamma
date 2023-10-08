
import { Schema , model , models } from "mongoose";
// :"",
// :"",
// :"",
//  :"",
// edate:"",
// venue:"",
// poster:"",
// description:"",
// joinLink:""

const EventSchema = {
    name:{
        type:String ,
        required:[true , 'user is Required !']

    },
    type:{
        type:String ,
        // unique:[true , 'username already exists'],
        required:[true , 'user is Required !']

    },
    organizer:{
        type:Schema.Types.ObjectId ,
        ref:'Committee',//one to many relationship
        

    },
    sdate:{
        type:String ,
        // unique:[true , 'username already exists'],
        required:[true , 'user is Required !']

    },
    edate:{
        type:String ,
        // unique:[true , 'username already exists'],
        required:[true , 'user is Required !']

    },
    venue:{
        type:String ,
        required:[true , 'venue is Required !']

    },
    poster:{
        type:String ,
        required:[true , 'user is Required !']

    },
    description:{
        type:String ,
        required:[true , 'user is Required !']

    },
 
    joinLink:{
        type:String ,
        required:[true , 'user is Required !']

    },


}


const Events = models.Events || model( "Events" ,EventSchema);

export default Events ;