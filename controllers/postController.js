const Comment = require("../models/commentModel");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");

const createPost = async (req,res) => {
    try {
        const { user_id,title,description} = req.body
        console.log(req.file)
        if(!user_id || !title || !description) res.json({message : 'All fields are required'})
        const data = await Post.create({
            user_id :user_id,
            title :title,
            // image : req.file.filename,
            description :description
        })
        return res.status(201).send(data)
    } catch (error) {
        console.log('error in createPost controller', error)
        return res.status(400).send('post is not created try again')
    }
}

const likePost = async (req,res) => {
    try {
        const { user_id,post_id} = req.body
        if(!user_id || !post_id ) res.json({message : 'All fields are required'})
        const data = await Like.create({
            user_id : user_id,
            post_id : post_id
        })
        return res.status(201).send(data)
    } catch (error) {
        console.log('error in likePost controller', error)
        return res.status(400).send('post is not liked try again')
    }
}
const commentPost = async (req,res) => {
    try {
        const { user_id,post_id,content} = req.body
        if(!user_id || !post_id || !content) res.json({message : 'All fields are required'})
        const data = await Comment.create({
            user_id : user_id,
            post_id : post_id,
            content : content
        })
        return res.status(201).send(data)
    } catch (error) {
        console.log('error in commentPost controller', error)
        return res.status(400).send('Comment is not created try again')
    }
}

module.exports = {createPost,likePost,commentPost,}