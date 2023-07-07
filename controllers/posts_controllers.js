const Post = require('../models/posts');
const Comment = require('../models/comments');

module.exports.create = async function(req, res){
    try{
        await Post.create({
            content : req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.status(200).json({
                data: {
                    post : post
                },
                message: "Post Created!"
            })
        }

        req.flash('success', 'post published');
        return res.redirect('back');
    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return ;
    }
    
    
}

module.exports.destory = async function(req,res){
    
    try{
        let posts = await Post.findById(req.params.id);

        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params,id});
            if(req.xhr){
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    }, 
                    message: "Post deleted"
                });
            } 
            req.flash('success', 'post destroyed');
            return res.redirect('back');
        }
        else{
            req.flash('error', err);
            return res.redirect('back');
        }

    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return ;
    }
    
}