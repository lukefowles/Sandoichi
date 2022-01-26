import {Router} from 'express';
import User from '../models/user-model.js'

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
    User.findOne({ id: req.params.id })
    .then(populate('orders'))
    .then(user => res.json(user.orders))
    .catch(err => res.status(400).json('Error: ' + err))  
})

//make a new user
userRouter.route('/add').post((req, res) => {

    const newUser = new User(req.body);

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
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