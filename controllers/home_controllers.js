module.exports.home = function(req, resp){
    console.log(req.cookeis);
    resp.cookeis('user_id' , 22);
    return resp.render('home', {
        title: "Funding App"
    });
}

// syntax for controller 
// module.exports.actionName = function(req, resp){}