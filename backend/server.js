import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';
dotenv.config();
const app = express();

//Middelware para parsear json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://NoStudio:AdminNoStudio@cluster0.sorbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/',(req,res)=>{
    res.send('Server is ready');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

//si el puerto proces.env.PORT no existe lo lanzaria en el 5000
const port = process.env.PORT || 6000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});