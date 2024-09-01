const express = require('express');
const router = express.Router();
const  sendMessage = require ('../../controllers/employerController/message.js')
router.post('/:senderId/:receiverId', sendMessage.post);
router.get('/:senderId/:receiverId', sendMessage.getMessages )
 router.get('/', sendMessage.getAlluser)
 router.get('/:id', sendMessage.getUniqueReceiverIds)

module.exports = router;