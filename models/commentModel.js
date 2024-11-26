const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

const Comment = sequelize.define(
    'Comment',
    {
        comment_id: {
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
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'comments'
    },
);

module.exports = Comment