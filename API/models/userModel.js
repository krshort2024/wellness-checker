import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    userName: { type: String, required: true },
    firstName: {type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
