const express = require('express');
const { createPost, likePost, commentPost } = require('../controllers/postController');
const postRouter = express.Router()


postRouter.route('/create').post(createPost)  

postRouter.route('/like').post(likePost)  

postRouter.route('/comment').post(commentPost) 


module.exports = postRouter;  