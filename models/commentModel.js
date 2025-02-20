// kis post par comment kara hai
// kis user ne comment kara hai
// kya comment kara hai



//import mongoose
const mongoose = require('mongoose');


//route handler 
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,   //dusre model(here postModel) ki id ko lene ka tareeka
        ref : "Post" //this is refernece to the postModel
    },
    user: {   //kis user ne comment kara hai
        type:String,
        required:true,
    },    
    body: {   //kya comment kara hai
        type:String,
        required:true,
    }    
})


//export 
module.exports = mongoose.model("Comment",commentSchema)    //commentSchema ko Comment naam se export kar diya