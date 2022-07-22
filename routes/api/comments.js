const {CommentController} = require('../../controllers');

module.exports = router => {
    router.get('/:id', CommentController.fetch);
    router.post('/', CommentController.create);
    router.put('/:id', CommentController.update);
    router.delete('/:id', CommentController.remove);

    return router;
};
