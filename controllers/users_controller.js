const User = require('../models/user');
const fs = require('fs');
const path = require('path');

module.exports.profile = function(req, res){
    Uset.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user : user
        });
    });
    
}

module.exports.update = async function(req, res){
    if(req.User.id == req.params.id){
        // User.findByIdansUpdate(res.params.id, req.body,function(err, user) {
        //     return res.redirect('back');
        // });

        try{
            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function(err){
                if(err){
                    console.log("Multer error", err);
                }
            user.name = req.body.name;
            user.email = req.body.email;

            if(req.file){
                if(user.avatar){
                    fs.unlinkSync(path.join(__dirname, '..'. user.avatar));
                    
                }
                user.avatar = User.avatarPath + '/' + req.file.filename;
            }
            user.save();
            return res.redirect('back');
            });
        }catch(err){
            console.log('Error', err);
            return ;
        }
    }
    else{
        req.flash('error', 'Unauthorised');
        return res.status(401).send('Unauthoraized');
    }


}

module.exports.singUp = function(req, res){
    if(req.isAuthenticated()){
        res.redirect('/users/profile');
    }
    
    return res.render('user_sign_up', {
        title: "sign Up"
    });
}

module.exports.singIn = function(req, res){
    return res.render('user_sign_in', {
        title: "sign In"
    });
}

module.exports.createSession = function(req, res){
    req.flash('sucess', 'Logged in Successfully');
    return res.redirect('/');
}

module.exports.destorySession = function(req, res){
    req.logout();
    req.flash('sucess', 'Logged out Successfully');
    return res.redirect('/');
}