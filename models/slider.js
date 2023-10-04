import { Schema , model ,models } from "mongoose";
// imageLink:"" ,
// description:"" 
const SliderSchema = new Schema({
    imageLink:{
        type:String ,
        

    },
    description:{
        type:String
    }
})

const Slider = models.Slider || model( "Events" ,SliderSchema);

export default Slider ;