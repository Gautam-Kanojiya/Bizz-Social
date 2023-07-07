const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile/:id',passport.checkAuthentication , usersConrtoller.profile);
router.get('/sign-up', usersConrtoller.singUp);
router.get('/sign-in', usersConrtoller.singIn );

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersConrtoller.createSession);

router.get('/sign-out', usersConrtoller.destorySession);

router.get('/auth/google'. passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback'. passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersConrtoller.createSession);


module.exports = router;