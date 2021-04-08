const express = require('express');
const router = express.Router();

const state_controller = require('../controllers/states_controller');

router.post('/get-data', state_controller.getData);

module.exports = router;