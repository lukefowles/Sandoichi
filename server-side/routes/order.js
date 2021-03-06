import {Router} from 'express';
import Order from '../models/order-model.js';
import User from '../models/user-model.js';
import mongoose from 'mongoose';
import auth from './tokenRoute.js'

const orderRouter = new Router();

//get all orders
orderRouter.route("/").get((req, res) => {
    Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err))
})

//get orders by user
orderRouter.route("/user-orders/:id").get((req, res) => {

    auth(res, req);

    Order.find({user: req.params.id})
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err))  
})

//create an order
orderRouter.route("/add").post((req, res) => {

    auth(res, req);

    const newOrder = new Order(req.body);

    //Save order
    newOrder.save()
        //Find customer by id and push order id (returned from .save() method) to user's order array.
        .then(result => {
            const orderId = result.id
            console.log(req.body.user);
            User.findById(req.body.user)
                .then(user => {
                    user.orders.push(orderId);
                    user.save()
                        .catch(err => res.status(400).json('Error: ' + err));
                })
        })
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));   
})


//NOT WORKING AT PRESENT
//delete an order
orderRouter.route("/delete/:orderId/:userId").delete((req, res) => {
    //Find order and delete
    // Order.findByIdAndDelete(req.params.orderId)
    
    // // Find user and update
    // .then(() => {
    //     User.findById(req.params.userId)
    //         .then((user) => {
    //             console.log(user);
    //             user.orders = user.orders.filter(order => or);
    //             console.log(user.orders);
    //             user.save(user)
    //             .catch(err => res.status(400).json('Error: ' + err))  
    //         })
    // })
    // .then(() => res.json('Order deleted'))
    // .catch(err => res.status(400).json('Error: ' + err));
    //Find user
    let orderID;

    Order.findById(req.params.orderId)
    .then(order => orderID = order._id)
    // .then(() => {
    //     User.findById(req.params.userId)
    //         .then((user) => {
    //             console.log(orderID)
    //             console.log(mongoose.Types.ObjectId(req.params.orderId));
    //             console.log(user.orders);
    //             user.orders = user.orders.filter(order => order !== mongoose.Types.ObjectId(req.params.orderId));
    //             console.log(user.orders);
    //             user.save(user)
    //             .catch(err => res.status(400).json('Error: ' + err))  
    //         })
    // })
    .then(() => {
        User.findOneAndUpdate({_id: req.params.userId}, {$pull : {orders: req.params.orderId}}, (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'error in deleting address' });
            }})
    })
    .then(() => Order.findByIdAndDelete(orderID))
    .then(() => res.json('Order deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
    
  
})

export default orderRouter