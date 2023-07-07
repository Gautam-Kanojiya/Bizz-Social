const mongoose = reqire('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //including comment in an array
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
},{
    timestamp: true
});

const Post = mongoose.model('Post', postSchema);
module.exports= Post;