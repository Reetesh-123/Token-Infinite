const mongoose = require("mongoose")




const PostSchema = new mongoose.Schema({

    rolepost : {
        type:String,
        required:true,
    } ,
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
   
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    } ,
     info:{
        type:Array,
        required:true
    }
},
    {timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema);

