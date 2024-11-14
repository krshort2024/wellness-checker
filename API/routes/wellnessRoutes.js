import { 
    addNewUser,
    getUsers,
    getUserWithId,
    updateUser,
    deleteUser
} from '../controllers/userControllers'

const routes = (app) => {
    app.route('/users')
    .get(getUsers) 
    .post(addNewUser)  

    app.route('/user/:UserId')
    .get(getUserWithId)
    .put(updateUser)
    .delete(deleteUser)
}

export default routes