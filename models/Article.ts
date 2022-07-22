import { Schema, model } from "mongoose";


export interface IArticle {
    title: string;
    author: string;
    body: string;
}

const Article = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<IArticle>("Article", Article);
