const {CommentService} = require('../services');

const commentService = new CommentService();

class CommentController {
  static async fetch(req, res, next) {
    try {
      res.send(await commentService.fetch(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      res.status(201).send(await commentService.create(req.body.comment));
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      res.status(200).send(await commentService.update(req.params.id, req.body.comment));
    } catch (err) {
      next(err);
    }
  }

  static async find(req, res, next) {
    try {
      res.send(await commentService.find(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  static async remove(req, res, next) {
    try {
        res.status(200).send(await commentService.remove(req.params.id));
     
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CommentController;
