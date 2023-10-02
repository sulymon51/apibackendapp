const express = require('express');
const userController = require('../controller/userController');
const {authAccess} = require('../middleware/access');
const router = express.Router();



router.get('/user', authAccess, userController.getLoggedInUser);

module.exports = router;
