const sequelize = require('../config/connection');
const Comment = require('./commentModel');
const Like = require('./likeModel');
const Post = require('./postModel');
const User = require('./userModel');

sequelize.sync({force:false})

User.hasMany(Post,{foreignKey : 'user_id' })
Post.belongsTo(User,{foreignKey: 'user_id' })

Post.hasMany(Like,{foreignKey : 'post_id'})
Like.belongsTo(Post, { foreignKey: "post_id" })

Post.hasMany(Comment,{foreignKey: 'post_id'})
Comment.belongsTo(Post,{foreignKey : 'post_id'})


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }