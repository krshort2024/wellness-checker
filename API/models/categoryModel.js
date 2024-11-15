import mongoose from 'mongoose'
import { SubCategorySchema } from './subcategoryModel'
import { RatingSchema } from './ratingModel'    

const Schema = mongoose.Schema
const Rating = mongoose.model('Rating', RatingSchema);

export const CategorySchema = new Schema({
    name: { type: String, required: true },
    subCategories: [SubCategorySchema],    
})

CategorySchema.methods.calculateDailyAverageRating = async function () {
    try {
      // Get the current date
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);  // Set to the start of the day
  
      // Aggregate ratings for this category and only for today
      const ratings = await Rating.aggregate([
        { $match: { 
          categoryId: this._id, 
          date: { $gte: currentDate }  // Only consider today's ratings
        }},
        { $group: {
          _id: null,  // We only need the total average for the category
          averageRating: { $avg: "$rating" }  // Calculate average of all ratings for today
        }},
      ]);
  
      if (ratings.length === 0) {
        return 0;  // No ratings for today
      }
  
      return ratings[0].averageRating;
    } catch (error) {
      console.error("Error calculating daily average rating:", error);
      return 0;
    }
  };
  

  
  
  
