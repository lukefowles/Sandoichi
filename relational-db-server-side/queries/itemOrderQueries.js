import pool from '../db.js'

function getOrderItems(order_Id) {
    pool.query("SELECT * FROM order where order_id = $1", [order_Id], (err, results) => {
        if(err) throw err;

        return res.status(200).json(results.rows)

    })
}

export default {getOrderItems}
