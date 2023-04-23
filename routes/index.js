// require express 
const express = require('express');
const router = express.Router();
// check to see if it is working 
console.log('routes are working');
// require home controller 
const homeController = require('../controllers/home_controller');
// route for home 
router.get('/', homeController.home);

// route for creating note 
router.post('/create-note', homeController.createTask);

// route for deleting note 
router.post('/delete-note', homeController.deleteNote);

module.exports = router;