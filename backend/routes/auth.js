const express =require('express');
const {check} = require('express-validator');
const router = express.Router();
const {signout,signup} = require('../controllers/auth')

router.post('/signup',[
    check("name").isLength({min:3}).withMessage('name should be atleast 3 char'),
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({min:3}).withMessage("password should be atleast 3 char")
],
signup);

router.get('/signout',signout);

module.exports = router;