import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
import { CategorySchema } from "../models/categoryModel";
import { SubCategorySchema } from "../models/subcategoryModel";
import { RatingSchema } from "../models/ratingModel";

// this holds the detail rate data for a user / category / subcategory / date
const User = mongoose.model('User', UserSchema);
const Category = mongoose.model('Category', CategorySchema);
const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
const Rating = mongoose.model('Rating', RatingSchema);


export const getRates = async ( req, res ) => {
  try {
    const rates = await Rating.find({})
    res.json(rates)
  } catch (err) {
    res.send(err)
  }
}

// export const getOneRateForUser =async ( req, res ) => {
//   const { userId, categoryId, subcategoryId, date } = req.params;

//   // Check if the user exists
//   const user = await User.findById(userId);
//   if (!user) {
//       return res.status(404).json({ message: "User not found" });
//   }

//   // Check if the subcategory exists
//   const subcategory = await SubCategory.findById(subcategoryId);
//   if (!subcategory) {
//     return res.status(404).json({ message: "Subcategory not found" });
//   }

// //   // Check if the category exists
// //   const category = await Category.findById(categoryId);
// //   if (!category) {
// //     return res.status(404).json({ message: "Category not found" });
// //   }

// //  try {
// //     // Parse the date to a valid format
// //     const parsedDate = new Date(date);

// //     // Query the database for ratings based on userId, categoryId, subcategoryId, and date
// //     const rating = await Rating.find({
// //       userId: mongoose.Types.ObjectId(userId),
// //       categoryId: mongoose.Types.ObjectId(categoryId),
// //       subcategoryId: mongoose.Types.ObjectId(subcategoryId),
// //       date: { $gte: parsedDate.setHours(0, 0, 0, 0), $lt: parsedDate.setHours(23, 59, 59, 999) }
// //     });

// //     if (rating.length === 0) {
// //       return res.status(404).json({ message: 'No ratings found for the given parameters' });
// //     }

// //     return res.status(200).json(rating);
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({ error: 'Internal server error' });
// //   }
  
// }

/* export const addRate = async (req, res) => {
    const { userId, categoryId, subcategoryId, rating } = req.body;
  
    // Validate the rating
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }
  
    try {
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the subcategory exists
      const subcategory = await SubCategory.findById(subcategoryId);
      if (!subcategory) {
        return res.status(404).json({ message: "Subcategory not found" });
      }
  
      // Check if the category exists
      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      // Check if the user has already rated this subcategory
      const existingRating = await Rating.findOne({ userId, categoryId, subcategoryId });
  
      if (existingRating) {
        // Update the existing rating
        existingRating.rating = rating;
        existingRating.date = new Date();
        await existingRating.save();
      } else {
        // Add a new rating
        const newRating = new Rating({
          userId,
          categoryId,
          subcategoryId,
          rating,
          reflection,
          date: new Date(),
        });
        await newRating.save();
      }
  
      // Recalculate the category's average rating
      const categoryAvgRating = await category.calculateDailyAverageRating();
  
      res.status(200).json({
        message: "Rating submitted successfully",
        categoryAverageRating: categoryAvgRating,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
 */
/* export const getAverage = async (req, res) => {
    try {
      const category = await Category.findById(req.params.categoryId).populate('subCategories');
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      // Calculate the category's daily average rating
      const average = await category.calculateDailyAverageRating();
      res.status(200).json({ averageRating: average });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 */
 
  