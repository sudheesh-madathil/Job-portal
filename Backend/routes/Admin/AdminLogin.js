const express = require('express');
const router = express.Router();

const userlogin = require ("../../controllers/adminController/AdminLogin")

router.post('/',userlogin.post)


module.exports = router