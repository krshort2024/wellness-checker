import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

export const RatingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
  subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category.SubCategories', required: true },
  rating: {type: Number, min: 1, max: 5, required: true },
  reflection: { type: String },
  date: {type: Date, required: true },
}, {timestamps: true });

RatingSchema.index({ userId: 1, categoryId: 1, subcategoryId: 1, date: 1 }, {unique: true });



