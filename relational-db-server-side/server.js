import express from 'express'
import userRouter from './routes/user-route.js'

const app = express();
const port = 5000;

app.use(express.json())

app.use('/user', userRouter)
app.use('/order', orderRouter)


app.listen(port, () => {console.log('app listening on port 5000')})