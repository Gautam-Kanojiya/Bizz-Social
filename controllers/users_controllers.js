const User = require('../models/user');

module.exports.profile = function(req, resp){
    return resp.end('<h1>User Profile</h1>');       // h2 onwards , tangs are not renderd DK why?
}


module.exports.signUp = function(req, resp){
    return resp.render('user_sign_up', {
        title: "Sign Up Page"
    });
}

module.exports.signIn = function(req, resp){
    return resp.render('user_sign_in', {
        title: "Sign In Page"
    });
}


// get sign up data
module.exports.create = function(req, resp){
    if(req.body.password != req.body.confirm_password){
        return resp.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error Finding user'); return;}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error creating user'); return;}
                return resp.redirect('/users/sign-in');
            })
        }
        else{
            return resp.redirect('back');
        }
    })

}
// sign in session
module.exports.createSession = function(req, resp){
    
}