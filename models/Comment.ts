import { Schema, model } from "mongoose";

export interface IComment{
  body: string;
  author: string;
  articleId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const Comment = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  article: { type: Schema.Types.ObjectId, ref:'Article', required: true },
  createdAt: { type: Date, default: Date.now, required: false },
  updatedAt: { type: Date, default: Date.now, required: false }
});

export default model<IComment>("Comment", Comment);