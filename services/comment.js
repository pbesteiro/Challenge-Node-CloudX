const {Comment} = require('../models');

class CommentService {

    fetch(articleId){
        console.log(articleId);
        return Comment.find({ "article": articleId}).populate('article').lean().exec();    
    }

    create(comment){
        return Comment.create(comment);
    }

    update(id,comment){
        return Comment.findByIdAndUpdate(id,comment).lean().exec();
    }

    find(id){
        return Comment.findById(id).populate('article').lean().exec();
    }

    
    remove(id){
        return Comment.findByIdAndRemove(id).lean().exec();
    }

}

module.exports = CommentService;