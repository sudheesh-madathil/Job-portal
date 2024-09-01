
const express = require('express');
const router = express.Router();
const  UserLogin  = require('../../controllers/userController/UserLogin');



router.post('/', UserLogin.post);


module.exports = router;