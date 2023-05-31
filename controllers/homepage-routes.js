const router = require('express').Router();
const { Post, Users, Comments } = require('../models');

const getPostData = () => ({
  attributes: ['id', 'title', 'created_at', 'post_content'],
  include: [
    {
      model: Comments,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: Users,
        attributes: ['username', 'twitter', 'github']
      }
    },
    {
      model: Users,
      attributes: ['username', 'twitter', 'github']
    }
  ]
});

router.get('/', (req, res) => {
  Post.findAll({
    ...getPostData()
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('landing-page', { posts: posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login-page');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    ...getPostData()
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const posts = dbPostData.get({ plain: true });
      res.render('view-post', { post: posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;