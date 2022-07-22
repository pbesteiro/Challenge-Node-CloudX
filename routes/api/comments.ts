import {Router} from 'express';
import {CommentController} from '../../controllers';

const commentsApi = (router: Router) => {
    router.get('/:id', CommentController.fetch);
    router.post('/', CommentController.create);
    router.put('/:id', CommentController.update);
    router.delete('/:id', CommentController.remove);

    return router;
};
export default commentsApi;