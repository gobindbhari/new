const Comment = require("../models/commentModel");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");
const User = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body
        console.log(username, password, email, "=============")
        if (!username || !password || !email) res.json({ message: 'All fields are required' })
        const data = await User.create({
            username: username,
            password: password,
            email: email
        })
        return res.send(data)
    } catch (error) {
        console.log('error in createUser Controller', error)
        return res.json({ message: 'error in createUser Controller' })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const data = await User.findAll({
            // where:{id:2},   
            include: [{
                model: Post,
                include: [{ model: Like },
                { model: Comment }]
            }]
        })
        console.log(data.length)
        return res.send(data)
    } catch (error) {
        console.log('error in findAllUsers Controller', error)
        return res.json({ message: 'error in findAllUsers Controller' })
    }
}

const findByIdUsers = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) res.json({ message: 'Id is required' })
        const data = await User.findByPk(id)
        return res.send(data)
    } catch (error) {
        console.log('error in findAllUsers Controller', error)
        return res.json({ message: 'error in findAllUsers Controller' })
    }
}

const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { firstname, lastname, email } = req.body
        if (!id) res.json({ message: 'Id is required' })
        const data = await User.findByPk(id)
        if (!id) { return res.status(404).json({ message: 'Id is not found' }) }
        const updateData = await User.update({
            firstname, lastname, email
        }, { where: { id: id } })
        console.log('User updated successfully!')
        return res.status(201).send('User updated successfully!')
    } catch (error) {
        console.log('error in updateUsers Controller', error)
        return res.status(400).json({ message: 'error in updateUsers Controller' })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) res.json({ message: 'Id is required' })
        const data = await User.findByPk(id)
        if (!id) { return res.status(404).json({ message: 'Id is not found' }) }
        const updateData = await User.destroy({ where: { id: id } })
        console.log('User updated successfully!')
        return res.status(200).send('User deleted successfully!')
    } catch (error) {
        console.log('error in deleteUsers Controller', error)
        return res.status(400).json({ message: 'error in deleteUsers Controller' })
    }
}



module.exports = { createUser, findAllUsers, findByIdUsers, updateUsers, deleteUsers }