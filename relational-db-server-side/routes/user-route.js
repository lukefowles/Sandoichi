import Router from 'express'
import userController from '../controllers/user-controller.js'

const userRouter = new Router();



userRouter.get('/allUsers/', userController.getUsers)



export default userRouter;