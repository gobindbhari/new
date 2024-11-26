const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Like = require('./likeModel');

const Post = sequelize.define(
    'Post',
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Image: {
        //     type: DataTypes.STRING,
        // },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'posts'
    },
);

// Post.hasMany(Like, { foreignKey: 'postid' })

module.exports = Post