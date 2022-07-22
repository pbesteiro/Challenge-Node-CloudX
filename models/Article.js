const mongoose =require('mongoose') ;

const Article = mongoose.model('Article', new mongoose.Schema({
            title: {type: String, require: true},
            author: {type: String, require: true},
            body: {type: String, require: true},
        }));

module.exports = Article;
