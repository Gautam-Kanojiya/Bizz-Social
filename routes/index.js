const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers');
console.log('Router Loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
// for any other routes add Here, 
// syntax:
// router.use('/routerName', require('./routerfile'));
module.exports = router;