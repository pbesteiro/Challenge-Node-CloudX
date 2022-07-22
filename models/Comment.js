const mongoose =require('mongoose') ;

const Comments = mongoose.model('Comments', new mongoose.Schema({
     author: {type: String, require: true},
    body: {type: String, require: true},
    article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
    createAt:{type: Date, require: false},
    updateAt:{type: Date, require: false},
}));

module.exports = Comments;
