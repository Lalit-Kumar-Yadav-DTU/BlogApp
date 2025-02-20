// kis post par like kara hai
// kis user ne like kara hai
 

//import mongoose
const mongoose = require('mongoose');


//route Handler 
const likeSchema = new mongoose.Schema({
    post:{   //kis post par like kara hai
        type:mongoose.Schema.Types.ObjectId,   //dusre model(here postModel) ki id ko lene ka tareeka
        ref : "Post"   //this is refernece to the postModel
    },
    user: {    //kis user ne comment kara hai
        type:String,
        required:true,   //user is definitely required, thats why it is true
    },    
})


//export 
module.exports = mongoose.model("Like",likeSchema)   //likeSchema ko Like naam se export kar diya