
const express = require('express');
const { registerController } = require('../controllers/registerController');
const { loginController } = require('../controllers/loginController');

const registerRoute = express.Router();
const loginRoute = express.Router();

registerRoute.post('/register', registerController);
loginRoute.post('/login', loginController);


module.exports = { registerRoute,loginRoute };