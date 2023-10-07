import  {Schema ,model , models} from "mongoose";
// :"",
// BT_ID:"",
// :"",
// :"" ,
// :"" ,
// :"",
// :"",
// :"",
// :"",
// :"",
// :"",
// :"",
// :"",
// :""
const TeamsSchama = new Schema({
year:{
    type:String , 
    required :true
},
   data:[ {name:{
        type:String ,
        ref:'User',//one to many relationship
    },
    DOB:{
        type:String ,
        required:[true , "Prompt is required!"]
    },
    BT_ID:{
        type:String,
    },
    position:{
        type:String,
        required:[true , "Tag is required"]
    }, 
    type:{
        type:Schema.Types.ObjectId ,
        ref:'Committee',//one to many relationship
    },
    linkedinUrl:{
        type:String,
    }
    ,
    facebookUrl:{
        type:String,
    }
,
instragramUrl:{
    type:String,
}
,
photoUrl:{
    type:String,
}
,
currentYear:{
    type:String,
    required:[true , "Tag is required"]
}
,
description:{
    type:String,
    required:[true , "Tag is required"]
},
skill:{
    type:String,
    required:[true , "Tag is required"]
},
cgpa:{
    type:String,
    required:[true , "Tag is required"]
}
,
hobby:{
    type:String,
    required:[true , "Tag is required"]
}}]

});

const Teams =  models.Teams || model('Teams' ,TeamsSchama)

export default Teams ;