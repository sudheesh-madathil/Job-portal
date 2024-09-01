const express = require('express');
const router = express.Router();
const  UserApplyedJob  = require('../../controllers/userController/userappliedJobs');



router.post('/',  UserApplyedJob.post);

router.get('/:postedBy',UserApplyedJob.getUserJobById );
router.get('/byuser/:id',UserApplyedJob.getUserJobHistory );
router.get('/', UserApplyedJob.getJob);

router.put('/:id',UserApplyedJob.updateJobStatus);
router.delete('/:id',UserApplyedJob.deleteJob);

module.exports = router;