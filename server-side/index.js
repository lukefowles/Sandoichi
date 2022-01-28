import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import order from './routes/order.js';
// import auth from './routes/auth.js';
import userRouter from './routes/user.js';
import orderRouter from "./routes/order.js"
// import {auth} from "./routes/tokenRoute.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
// app.use(auth);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/users', userRouter);
app.use("/orders", orderRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
