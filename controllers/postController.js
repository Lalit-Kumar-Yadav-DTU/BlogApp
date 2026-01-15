const Post = require("../models/postModel")

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body });
        const postSaved = await post.save();

        res.json({
            post : postSaved
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Error When Making This Post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            data : posts,
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error : "Error while Fetching Post "
        })
    }
}
