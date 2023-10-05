import { Schema ,model, models } from "mongoose";
import validator from "validator";
const UserSchema = new Schema({
    email:{
        type:String ,
        required:[true , 'Email is Required !'],
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: 'Invalid email address',
        },

    },
    username:{
        type:String ,
        unique:[true ,'username should be the unique'] ,
        required:[true , 'Username is required !'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"] 

    },
    
    image:{
    type:String ,
    },
    dropdown:{
        type:String ,
        },
    password:{
        type:String,
        required:true ,
     
    }
    
})

const User = models.User || model( "User" ,UserSchema);

export default User ;