const express = require('express');
const router = express.Router();
const passport = require('passport');
const postController = require('../controllers/posts_controllers');
const passport = require('passport');

router.post('/create', passport.checkAuthentication, postController.create);
router.get('/destory/:id', passport.checkAuthentication, postController.destory );

module.exports = router;
