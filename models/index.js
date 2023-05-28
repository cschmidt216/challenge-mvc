const Users = require('./Users');
const Post = require('./Post');
const Comments = require('./Comments');

// Create associations
Users.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Users, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id'
});

Users.hasMany(Comments, {
  foreignKey: 'user_id'
});

Post.hasMany(Comments, {
  foreignKey: 'post_id'
});

module.exports = {
  Users,
  Post,
  Comments
};