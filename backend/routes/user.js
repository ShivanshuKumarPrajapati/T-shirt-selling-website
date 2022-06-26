const express = require('express');
const Router =  express.Router();

const { getUserById, getUser,updateUser} = require('../controllers/user');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');


Router.param('userId',getUserById);

Router.get('/user/:userId',isSignedIn,isAuthenticated,getUser);
Router.put('user/:userId',isSignedIn,isAuthenticated,updateUser);



module.exports = Router;