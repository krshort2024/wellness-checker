import mongoose from "mongoose";
import { DailyAvgSchema } from "../models/dailyAvgModel";
import { UserSchema } from "../models/userModel";


const DailyAvg = mongoose.model('DailyAvg', DailyAvgSchema);
const User = mongoose.model('UserSchema', UserSchema);

export const getDailyAverages = async(req,res) => {
    try {
        const dailyAverages = await DailyAvg.find({})
        res.json(dailyAverages)
    } catch (err) {
        res.send(err)
    }
}

export const getDailyAveragesForUser = async(req,res) => {
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const dailyAvgs = await DailyAvg.find({ userId })
        .populate('categoryId')    // Optionally populate Category data
        .populate('subcategoryId') // Optionally populate SubCategory data
        .sort({ date: -1 }); // Sort by date, newest first
        
        if (dailyAvgs.length === 0) {
            return res.status(404).json({ message: 'No data found for this user' });
          }
      
        // Return the data
        res.status(200).json(dailyAvgs);
    } catch (err) {
        res.send(err)
    }
}


 /* // Get the daily average for a user, category for all dates.
 export const getDailyAverageByUser = async (req, res) => {
    try {
      // Check if the user exists
      const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const category = await Category.findById(req.params.categoryId).populate('subCategories');
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const 
  
      // Calculate the category's daily average rating
      const average = await category.calculateDailyAverageRating();
      res.status(200).json({ averageRating: average });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
   */