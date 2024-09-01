const express = require('express');
const router = express.Router();
const EmRegister = require ('../../controllers/employerController/EmRegister')

router.post('/',EmRegister.post)
router.get('/',EmRegister.get)
router.get('/:id',EmRegister.getById)
router.delete('/:id',EmRegister.delete)


module.exports = router;