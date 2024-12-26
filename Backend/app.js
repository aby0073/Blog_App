const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors= require('cors');
require('dotenv').config();
// const path=require('path');
const PORT=4001;                                      //port 

app.use(cors());                                        // enables cors      
app.use(express.json());

//mongoDB connection

mongoose.connect(process.env.DB_URI)                    
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

const blogrouter = require('./routes/blogroute.js');   //Import routes
app.use('/',blogrouter);                               //use  routes


//start server

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});