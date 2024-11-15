import { 
    addRateSubCategory,
    getAverage
 } from '../controllers/ratingController';
 import {
    getDailyAverages,
    getDailyAveragesForUser
 } from "../controllers/dailyAvgController";
import { 
    addNewUser,
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
} from '../controllers/userControllers';
import { getCategories, getSubCategories } from '../controllers/categoryController';



const routes = (app) => {
    app.route('/users')
    .get(getUsers) 
    .post(addNewUser)  

    app.route('/user/:UserId')
    .get(getUserWithId)
    .put(updateUser)
    .delete(deleteUser)

    app.route('/rate-subcategory')
    .post(addRateSubCategory)
    
    app.route('/rate/:categoryId')
    .get(getAverage)

    app.route('/daily')
    .get(getDailyAverages)

    app.route('/daily/:UserId')
    .get(getDailyAveragesForUser)

    app.route('/category')
    .get(getCategories)

    app.route('/subcat')
    .get(getSubCategories)
}

export default routes