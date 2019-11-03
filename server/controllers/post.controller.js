const uuid = require('uuid');
const Post = require('../models/post.model');

// get all posts
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get posts by range
exports.getPostsByRange = async (req, res) => {
  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt, 10);
    limit = parseInt(limit, 10);

    const posts = await Post.find()
      .skip(startAt)
      .limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get post
exports.getPost = async (req, res) => {
  try {
    res.status(200).json(await Post.find({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};

// add new post
exports.addPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    newPost.id = uuid();

    const postSaved = await newPost.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

// edit new post
exports.editPost = async (req, res) => {
  try {
    const { title, author, content, _id } = req.body;
    const update = {
      title,
      author,
      content,
    };
    const postEdited = await Post.findByIdAndUpdate(_id, update);
    res.status(200).json(postEdited);
  } catch (err) {
    res.status(500).json(err);
  }
};
