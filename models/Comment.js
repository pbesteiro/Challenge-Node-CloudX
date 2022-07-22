const mongoose =require('mongoose') ;

const Comments = mongoose.model('Comments', new mongoose.Schema({
     author: {type: String, require: true},
    body: {type: String, require: true},
    article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'}
}));

module.exports = Comments;
