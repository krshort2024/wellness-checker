import mongoose from 'mongoose'
import { User } from '../models/userModel'

export const addNewUser = async(req, res) => {
    let newUser = new User(req.body)

    try {
        const user = await newUser.save()
        res.json(user)
    } catch (err) {
        res.send(err)
    }
}

export const getUsers = async (req,res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
}

export const getUserWithId = async (req,res) => {
    try {
        const user = await User.findById(req.params.UserId)
        res.json(User)
    } catch (err) {
        res.send(err)
    }
}

export const updateUser = async(req,res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.UserId },
            req.body,
            { new: true }
        )
        res.json(user)

    } catch (err) {
        res.send(err)
    }
}

export const deleteUser = async (req,res) => {
    try {
        await User.deleteOne({ _id: req.params.UserId})
        res.json({message: 'Successfully deleted user'})

    } catch (err) {
        res.send(err)
    }
}