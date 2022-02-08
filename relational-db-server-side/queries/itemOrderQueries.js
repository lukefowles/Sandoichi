import pool from '../db.js'


function getOrderItems(order_Id) {
    pool.query("SELECT (name, type, price) FROM order where order_id = $1", [order_Id], (err, results) => {
        if(err) throw err;

        return results.rows

    })
}

export default {getOrderItems}
