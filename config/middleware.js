module.exports.setFlash = function(req, resp, next){
    res.local.falsh = {
        'success' : req.falsh('success'),
        'error' : req.falsh('error')
    }

    next();
}