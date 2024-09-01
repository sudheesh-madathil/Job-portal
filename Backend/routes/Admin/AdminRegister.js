const express = require('express');
const router = express.Router();
const AdminRegister= require ('../../controllers/adminController/Adminregister.js')

router.post('/',AdminRegister.post)
router.get('/:id',AdminRegister.get)

router.get('/',AdminRegister.getAllUsers)
router.delete('/:id',AdminRegister.delete)

module.exports = router