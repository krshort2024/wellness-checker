import { 
    addNewUser,
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
} from '../controllers/userControllers';
import { 
    getCategories,
    getSubCategories 
} from '../controllers/categoryController';
import { 
//   getOneRateForUser,
    getRates
 } from '../controllers/ratingController';
  import {
    getDailyAverages,
    getDailyAveragesForUser
 } from "../controllers/dailyAvgController";


 const routes = (app) => {
    app.route('/users')
    .get(getUsers) 
    .post(addNewUser)  

    app.route('/user/:UserId')
    .get(getUserWithId)
    .put(updateUser)
    .delete(deleteUser)
  
    app.route('/category')
    .get(getCategories)

    app.route('/subcat')
    .get(getSubCategories)

    app.route('/rates')
    .get(getRates);

    // app.route('/rate/UserId:CategoryId:SubCategoryId:Date')
    //     .get(getOneRateForUser);

    app.route('/averages')
    .get(getDailyAverages)

    app.route('/average/:UserId')
    .get(getDailyAveragesForUser)


/*     app.route('/rate/:categoryId')
    .get(getAverage)
 */
}

export default routes