const express = require('express');
const router = express.Router();
const jobseeker = require ('../../controllers/userController/UserRegister')
const upload = require("../../controllers/multer/Multer"); 
router.post('/',upload.single("resume"),jobseeker.post)
router.get('/',jobseeker.get)

router.get('/:id',jobseeker.getById)
router.put('/:id',jobseeker.updateById)
router.delete('/:id',jobseeker.delete)

module.exports = router