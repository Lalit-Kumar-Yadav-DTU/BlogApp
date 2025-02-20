// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const postSchema = new mongoose.Schema({
    title : {    //post ka title kya hai
        type : String,
        required : true
    } ,
    body : {    //post ka body kya hai
        type : String,
        required : true
    } ,
    likes : [{     //likes array of type id, it will store id of all likes
        type : mongoose.Schema.Types.ObjectId,     //dusre model(here likeModel) ki id ko lene ka tareeka
        ref : "Like",     //this is refernece to the likeModel   
    }],
    comments: [{   //comments array of type id, it will store id of all comments
        type : mongoose.Schema.Types.ObjectId,     //dusre model(here commentModel) ki id ko lene ka tareeka
        ref : "Comment",
    }]
})


// Export 
module.exports = mongoose.model("Post",postSchema)     //likeSchema ko Like naam se export kar diya