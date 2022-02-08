import pool from '../db.js'
import orderQueries from '../queries/order-queries.js'
import itemOrderQueries from '../queries/itemOrderQueries.js'
import Order from '../Plain_JS_objects/order.js'
import Item from '../Plain_JS_objects/item.js'

async function getAllOrders(req, res) {
    
    // //First get array of all orders
    // const orderQuery = await orderQueries.getAllOrders(req, res);
    
    // //Now loop through array
    // orderQuery.forEach((order) => {

    //     //Use order id to find the items corresponding to that order
    //     const orderItems = await itemOrderQueries.getOrderItems(order.order_Id)

    //     //Now loop through order items to make an item POJO, and add this to array in order class
    //     orderItems.forEach((item) => {


           
    //     })
        
    // })


}

function getOrder(req, res) {
    const order_id = req.params.id;
    
    //First find the specific order in orders table
    orderQueries.getOrder(order_id)
                .then((result) => {console.log(`${result} + 5`)})
    //Then create new instance of order object
    // let order = new Order(orderResult.totalCost, orderResult.deliveryAddress, orderResult.user_id);

    // //Then find all the items in this order
    // const itemsResult = itemOrderQueries.getOrderItems(order_id) 

    // //Loop through all items and add to items array of new instance of order object
    // itemsResult.forEach((row) => {

    //     let item = new Item(row.name, row.type, row.price)
        
    //     order.addItem(item)
    // });

    // //Finally return the order
    // res.status(200).json(order)
}

export default {getOrder}