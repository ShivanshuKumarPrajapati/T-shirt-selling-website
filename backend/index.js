require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


const app = express();
const port = process.env.PORT || 5000;
const url = process.env.ATLAS_URI;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(url).
      then(() => {
        console.log("MongoDB database connection established successfully");
      }).
      catch(error => console.log(error));


app.use('/api',authRoutes);
app.use('/api',userRoutes);


app.listen(port,function(){
    console.log('Server is running at',port);
})