const mongoose = require("mongoose");

const User = require("./models/User");  // ✅ FIXED
const Post = require("./models/Post");
const Comment = require("./models/Comment");

mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

async function createData() {
  const user = await User.create({
    name: "Vishal",
    email: "vishal@gmail.com",
    password: "123456"
  });

  const post = await Post.create({
    title: "My First Blog",
    content: "This is my first post",
    author: user._id
  });

  await Comment.create({
    text: "Nice post!",
    post: post._id,
    user: user._id
  });

  console.log("User, Post, Comment Created ✅");
}

createData();