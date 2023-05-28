const { Comments } = require('../models');

const commentsData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "placeholder"
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "placeholder"
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "placeholder"
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "placeholder"
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "placeholder"
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "placeholder"
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "placeholder"
  },
  {
    user_id: 5,
    post_id: 2,
    comment_text: "placeholder"
  }
];

const seedComments = async () => {
  try {
    await Comments.bulkCreate(commentsData);
  } catch (error) {
    console.error("Error seeding comments:", error);
  }
};

module.exports = seedComments;