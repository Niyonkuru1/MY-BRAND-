const express = require('express');
const authRoute = express.Router();
const services = require('../services/authRender');
const authController = require('../controller/authController')

authRoute.get('/signup',services.signup_get);
authRoute.post('/signup', services.signup_post);
authRoute.get('/login', services.login_get);
authRoute.post('/login', services.login_post);


// auth API
authRoute.post('/auth/signup',authController.signup_post );
authRoute.post('/auth/login',authController.login_post );

module.exports = authRoute;

