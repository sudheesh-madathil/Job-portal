const express = require('express');
const jobController = require('../../controllers/employerController/employerController');

const router = express.Router();

// Define the POST and GET routes
router.post('/:id', jobController.createJob);
router.get('/', jobController.getJobs);
router.get('/postedBy/:postedBy', jobController.getJobById);
router.delete('/:id',jobController.deleteJobById);
router.get('/:search',jobController.searchJobsByLocation)


module.exports = router;
