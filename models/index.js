const Users = require('./Users');
const Post = require('./Post');
const Comments = require('./Comments');

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
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Users.hasMany(Comments, {
  foreignKey: 'user_id'
});

Post.hasMany(Comments, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Users,
  Post,
  Comments
};