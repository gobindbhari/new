const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection');
const Post = require('./postModel');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Other model options go here
    tableName : 'users'
  },
);

User.hasMany(Post,{foreignKey : 'user_id'})

module.exports = User