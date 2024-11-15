import mongoose from 'mongoose'
import { CategorySchema } from '../models/categoryModel'
import { SubCategorySchema } from '../models/subcategoryModel'

const Category = mongoose.model('Category', CategorySchema)
const SubCategory = mongoose.model('SubCategory', SubCategorySchema)

export const getCategories = async (req,res) => {
    try {
        const users = await Category.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
}

export const getSubCategories = async (req,res) => {
    try {
        const users = await SubCategory.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
}
