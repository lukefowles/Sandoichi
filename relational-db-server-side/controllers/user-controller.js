import pool from '../db.js'

function getUsers(req, res) {
        pool.query("SELECT * FROM users", (err, results) => {
            if(err) throw err;

            return res.status(200).json(results.rows)

        })
    }


export default {getUsers}
