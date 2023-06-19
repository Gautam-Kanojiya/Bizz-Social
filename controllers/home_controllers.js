module.exports.home = function(req, resp){
    return resp.render('home', {
        title: "Funding App"
    });
}

// syntax for controller 
// module.exports.actionName = function(req, resp){}