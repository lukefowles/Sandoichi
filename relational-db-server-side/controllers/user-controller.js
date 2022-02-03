import pool from '../db.js'


//Logic to get all users from the database
function getUsers(req, res) {
        pool.query("SELECT * FROM users", (err, results) => {
            if(err) throw err;

            return res.status(200).json(results.rows)

        })
    }

//Logic to get a user by email
function getUserByEmail(req, res) {

    const email = req.body.email

    pool.query("SELECT * FROM users where email = $1", [email], (err, results) => {

        if(err) throw err;

        console.log(results.rows)

        if(results.rows.length === 0) {
            return res.status(404).send('No user with this email')
        }

        return res.status(200).json(results.rows);

    })
}

//Logic to post a new user
function postNewUser(req, res) {

    //First check a user with that email does not already exist
    pool.query("SELECT * FROM users where email = $1", [req.body.email], (err, results) => {
        
        if(err) throw err;

        if(results.rows.length === 0) {
            
            pool.query(`INSERT INTO users(name, email, address, password)
                        VALUES($1, $2, $3, $4)`, [req.body.name, req.body.email, req.body.addess, req.body.password],
                        (err, result) => {

                            if (err) throw err;

                            res.status(200).send('user added!')
                        })

        }

        else{
            res.status(400).send('User with this email already exists')
        }
    })

}

//function to delete a user
function deleteUser(req, res) {

    //First check to see if user with that email exists
    pool.query(`SELECT * 
                FROM users 
                WHERE email = $1`, [req.body.email], (err, result) => {

                    if(err) throw err;
                    
                    if(result.rows.length === 0) {
                        res.status(404).send('user with this email not found')
                    }

                    else{
                        //Now delete the user
                        pool.query(`DELETE FROM users
                                    WHERE email = $1`, [req.body.email], (err, results) => {
                                        res.status(200).send('User deleted!')
                                    })
                    }
                })
}

//Function to update a user
function updateUser(req, res) {

    pool.query(`UPDATE users
                SET name = $1, email = $2, address = $3, password = $4
                WHERE email = $4`,
                [req.body.name, req.body.email, req.body.address, req.body.password, req.body.email],
                (err, result) => {
                    
                })

}



export default {getUsers, getUserByEmail, postNewUser, deleteUser}
