import {Router} from 'express';
import User from '../models/user-model.js'
import {registerValidation, loginValidation} from '../services/validation.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import auth from './tokenRoute.js'

const userRouter = new Router();

//get all users
userRouter.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});


//get a specific user by email
userRouter.get("/user", (req, res) => {

    //Use auth function to validate the JSON web token passed into the header
    auth(res, req)

    //logic to find correct details if token verified

    User.findOne({email: req.body.email})
    .then(users => {
            if(users) {
                res.json(users)
            }
            else {
                res.status(404).send('Account with that email not found')
            }
    })
    .catch(err => res.status(400).json('Error: ' + err)) 
 
})

//get a specific user by Id
//n.b. the two separate ways to implement routes from the userRouter
userRouter.route("/user/:id").get((req, res) => {

    auth(res, req);

    User.findOne({id: req.params.id})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))  
})


//get all user orders
userRouter.route("/orders/:id").get((req, res)=> {

    auth(res, req);

    User.findOne({ _id: req.params.id })
    .then(user => user.populate('orders'))
    .then(user => res.json(user.orders))
    .catch(err => res.status(400).json('Error: ' + err))  
})

//make a new user
userRouter.route('/add').post( async (req, res) => {

    //check if the request has the fields in the right format
    const validation = registerValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message)

    //Check email doesn't exist
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send('Email already exists');

    //Create the salt and hash the password with the salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user with request data and hashed password
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
    });

    //Save the new user
    newUser.save()
        .then(() =>{ res.json('User added!')})
        .catch(err => res.status(400).json('Error: ' + err))
        // .then(() => res.status(200).res.send("Logged in succesfully"))
    
});

//Login user
userRouter.route('/login').get(async (req, res) => {

    //validation for login
    const validation = loginValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email or password incorrect');

    //Check the password matches the hashed password in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid password');

    //Create the JSON webtoke to be used in the session
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);

    //login message
    res.status(200).send('Login successful')

});


//update a user
userRouter.put('/update', (req, res) => {
    User.findOne({email: req.headers['email']}) 
        .then(user => {
            
            user.name = req.body.name;
            user.email = req.body.email;
            user.address = req.body.address;
            
            user.save()
                .then(() => res.send('Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

//updates a user order
// userRouter.route('/update/users-order').put((userID, orderID, res) => {
//     User.findById(userID)
//         .then(user => {
//             user.orders.push(orderID);
//             user.save()
//                 .then(() => res.json('Updated'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         }) 
//         .catch(err => res.status(400).json('Error: ' + err))
// });


//delete a user
userRouter.route('/delete/:email').delete((req, res) => {

    //Authentication
    auth(res, req);

    User.findOneAndDelete({email:req.params.email})
    .then(() => res.json('User deleted')
    .catch(err => res.status(400).json('Error: ' + err)))
});

export default userRouter