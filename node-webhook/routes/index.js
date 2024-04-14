const express = require('express');
const controller = require('../controller')
const router = express.Router();


router.post('/routine-webhook', controller.processWebhook); 

module.exports = router;