module.exports.home = function(req, resp){
    return resp.end('<h1> Express is Used for the project</h1>');
}

// syntax for controller 
// module.exports.actionName = function(req, resp){}