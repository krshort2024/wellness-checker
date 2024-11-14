import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleInitial: {
        type: String,
        max: 1
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})