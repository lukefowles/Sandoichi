import pool from '../db.js'

function getAllOrders(req, res) {
    pool.query("SELECT * FROM order", (err, results) => {
        if(err) throw err;

        return results.rows

    })  
}

async function getOrder(id) {
    
    return await pool.query(`SELECT * 
                FROM orders
                WHERE order_id =$1`, [id], async (err, result) => {
                    if (err) throw err;
                    console.log(result.rows[0]);
                    return await result.rows[0];
                })
}

export default {getAllOrders, getOrder}