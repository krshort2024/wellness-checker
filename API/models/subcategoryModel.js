import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const SubCategorySchema = new Schema({
    name: { type: String, required: true },
})

