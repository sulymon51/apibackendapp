const express = require('express');
const authController = require('../controller/authController');
const {checkEmailExistence} = require('../middleware/checkemailexist');
const router = express.Router();


router.post('/register', checkEmailExistence, authController.signup);
router.post('/login', authController.signin);

module.exports = router;
