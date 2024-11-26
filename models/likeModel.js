const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./postModel');

const Like = sequelize.define(
    'Like',
    {
        like_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'likes'
    },
);


module.exports = Like