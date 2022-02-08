import Router from 'express';
import orderController from '../controllers/order-controller.js'

const orderRouter = new Router();

//Route to get all orders
orderRouter.get('/allOrders/')

//Route to get a specific order
orderRouter.get('/Order/:id', orderController.getOrder)

export default orderRouter;
