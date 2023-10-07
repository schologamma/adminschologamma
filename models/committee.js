import { Schema  , model ,models } from "mongoose";

const CommitteeSchema = new Schema({
    name:{
        type:String ,
        required:[true , 'name is Required !']

    },
    email:{
        type:String ,
      
        // unique:[true , 'Email already exists'],
        required:[true , 'Email is Required !']
    },
    description:{
        type:String ,
        required:[true , 'description is Required !']
      

    },
    password:{
        type:String ,
        required:[true , 'description is Required !']
      

    },

    username:{
        type:String ,
        // unique:[true , 'username already exists'],
        required:[true , 'user is Required !']

    },
    photo:{
        type:String ,
      

    },


});

const Committee = models.Committee || model( "Committee" ,CommitteeSchema);

export default Committee ;