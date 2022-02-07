import pool from '../db.js'

function getAllOrders(req, res) {
    pool.query("SELECT * FROM order", (err, results) => {
        if(err) throw err;

        return results.rows

    })  
}

export default {getAllOrders}