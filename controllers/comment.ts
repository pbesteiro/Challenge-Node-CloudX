import {Request, Response, NextFunction} from 'express';
import {CommentService} from '../services';

const commentService = new CommentService();

class CommentController {
  static async fetch(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(await commentService.fetch(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(201).send(await commentService.create(req.body.comment));
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).send(await commentService.update(req.params.id, req.body.comment));
    } catch (err) {
      next(err);
    }
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send(await commentService.remove(req.params.id));
     
    } catch (err) {
      next(err);
    }
  }
}

export default CommentController;
