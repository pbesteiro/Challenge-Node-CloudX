import {Types} from 'mongoose'
import {Article} from '../models';
import {IArticle} from '../models/article';

const {ObjectId} = Types;

class ArticleService {

    fetch(){
        return Article.find().lean().exec();    
    }

    create(article: IArticle){
        return Article.create(article);
    }

    update(id: string,article: IArticle ){
        return Article.findByIdAndUpdate(id,article).lean().exec();
    }

    find(id: string){
        return Article.findById(id).lean().exec();
    }

    
    remove(id: string){
        return Article.findByIdAndRemove(id).lean().exec();
    }

}

export default ArticleService;