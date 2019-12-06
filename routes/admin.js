const express = require('express');
const router = express.Router();

const LoginController = require('../app/Controller/Admin/Auth/LoginController');
const RegisterController = require('../app/Controller/Admin/Auth/RegisterController');

router.get('/', LoginController.index);


module.exports = router;
