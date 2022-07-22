import {Types} from 'mongoose'
import {Comment} from '../models';
import {IComment} from '../models/comment';

class CommentService {

    fetch(articleId: string){
        return Comment.find({ "article": articleId}).lean().exec();    
    }

    create(comment: IComment){
        comment.createdAt=new Date();
        return Comment.create(comment);
    }

    update(id: string,comment: IComment){
        comment.updatedAt=new Date();
        return Comment.findByIdAndUpdate(id,comment).lean().exec();
    }
    
    remove(id: string){
        return Comment.findByIdAndRemove(id).lean().exec();
    }

}

export default CommentService;