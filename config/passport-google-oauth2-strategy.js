const passport =require('passport');
const googelStrategy = require('passport-google-oauth');
const crypto = require('crypto');
const User = require('../models/user');

passport.use( new googelStrategy({
    clintID:   ,
    clientSecret: ,
    callbackURL: 
    }, 

    function(accessToken, refreshToken, profile, done){
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if(err){console.log("error in google startegy", err); return;}

            console.log(profile);

            if(user){
                return done(null, user);
            }
            else{
                User.create({
                    name: profile.displayName,
                    password: crypto.randomBytes(20).toString('hex')
                }, 
                function(err, user){
                    if(err){console.log("error in creating user in google startegy", err); return;}
                    return done(null, user);
                }
                
                );
            }
        });
    }
));