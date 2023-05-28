const { Post } = require('../models');

const postData = [
  {
    title: "test1",
    post_content: "placeholder",
    user_id: 1
  },
  {
    title: "test2",
    post_content: "placeholder",
    user_id: 2
  },
  {
    title: "test3",
    post_content: "placeholder",
    user_id: 3
  },
  {
    title: "test4",
    post_content: "placeholder",
    user_id: 4
  },
  {
    title: "test5",
    post_content: "placeholder",
    user_id: 5
  }
];

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData);
  } catch (error) {
    console.error("Error seeding posts:", error);
  }
};

module.exports = seedPosts;
