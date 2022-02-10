import pool from '../db.js'
import orderQueries from '../queries/order-queries.js'
import itemOrderQueries from '../queries/itemOrderQueries.js'

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