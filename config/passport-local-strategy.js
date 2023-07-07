const passport = require('passport');

const LocalStrategy  = require('passport-local').Strategy;
const User = require('../models/user')

//authentication 
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback : true
    },
    function(email, password, done){
        //finsding a user
        User.findOne({email : email}, function(err,user){
            if(err){
                req.flash('error', err);
                console.log('Error in funding user');
                return done(err);
            }
            if(!user || user.password != password){
                req.flash('error', 'invalid username/ password');
                console.log("Invalid username or password");
                return done(null, false);
            }

            return done(null, user);
        })
    }
));


//searilising the user to deicde which key to be kept in cookie
passport.serializeUser(function(id , done){
    done(null, user.id);
});

//Desearilising the user from key in the cookie 
passport.deserializeUser(function(id , done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user ');
            return done(err);
        }

        return done(null, user);
    });
});

//check if user authinticated
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser= function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user =req.user;
    }

    next();
}

module.exports = passport;
