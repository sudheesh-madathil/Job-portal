// routes/jobRoutes.js
const express = require('express');
const  createJob  = require('../../controllers/employerController/employerController');

const router = express.Router();
router.post('/', createJob.post);


module.exports = router;
