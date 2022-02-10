import Router from 'express'
import userController from '../controllers/user-controller.js'

const userRouter = new Router();


//Route to get all orders
userRouter.get('/allUsers/', userController.getUsers)

//Route to get users by email
userRouter.get('/getUser/', userController.getUserByEmail)

//Route to post a new user
userRouter.post('/addUser/', userController.postNewUser)

//Route to delete a user 
userRouter.delete('/deleteUser/', userController.deleteUser)

//Route to update a user
userRouter.put('/updateUser/', userController.updateUser)



export default userRouter;