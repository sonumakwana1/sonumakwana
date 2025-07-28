import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload'

const app= express();


import ContactRouter from './routers/contact.router.js';
import UserRouter from './routers/user.router.js';

import CategroyRouter from './routers/category.router.js'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));
app.use("/user",UserRouter);
app.use("/contact",ContactRouter);
app.use("/category",CategroyRouter);

app.listen(5000);

console.log("server started at url http://localhost:5000/");
