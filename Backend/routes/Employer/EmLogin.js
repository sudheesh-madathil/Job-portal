
const express = require('express');
const router = express.Router();
const  EmLogin  = require('../../controllers/employerController/EmLogin');



router.post('/', EmLogin.post);


module.exports = router;