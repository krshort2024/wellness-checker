import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SubCategorySchema = new Schema({
    name: { type: String, required: true },
})

const CategorySchema = new Schema({
    name: { type: String, required: true },
    subCategories: [SubCategorySchema],    
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;


