import mongoose, { Schema, Model, Document } from 'mongoose';

interface IPost {
  user: string;
  text: string;
  name: string;
  avatar: string;
  likes: [
    {
      user: string;
    }
  ];
  comments: [
    {
      user: string;
      text: string;
      name: string;
      avatar: string;
      date: string;
    }
  ];
  date: string;
}

export type PostDocument = IPost & Document;

const PostSchema: Schema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post: Model<PostDocument> = mongoose.model('post', PostSchema);

export default Post;
