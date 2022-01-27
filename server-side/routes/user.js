import {Router} from 'express';
import User from '../models/user-model.js'
import {registerValidation, loginValidation} from '../services/validation.js'
import bcrypt from "bcryptjs";

const userRouter = new Router();

//get all users
userRouter.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});


//get a specific user by email

userRouter.route("/user").get((req, res) => {

    User.find({email: req.body.email})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))  
})

//get a specific user by Id
userRouter.route("/user/:id").get((req, res) => {

    User.find({id: req.params.id})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))  
})


//get all user orders
userRouter.route("/orders/:id").get((req, res)=> {
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
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
        .then(() => res.status(200).res.send("Logged in succesfully"))
    
});

//Login user
userRouter.route('/login').get(async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.error) return res.status(400).send(validation.error.details[0].message);

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email or password incorrect');

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid password');

    return res.status(200).send("Logged in succesfully")

});


//update a user
userRouter.route('/update/:id').put((req, res) => {
    User.findById(req.params.id) 
        .then(user => {
            // user = req.body;
            user.name = req.body.name;
            user.email = req.body.email;
            user.address = req.body.address;
            // user.orders = req.
            user.save()
                .then(() => res.json('Updated'))
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
userRouter.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted')
    .catch(err => res.status(400).json('Error: ' + err)))
});

export default userRouter