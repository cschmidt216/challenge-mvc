const router = require('express').Router();
const { Post, Users, Comments } = require('../models');
const auth = require('../helpers/auth');

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

router.get('/', auth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    ...getPostData()
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { ...posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', auth, (req, res) => {
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

      const post = dbPostData.get({ plain: true });

      res.render('edit', {
        post,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/create/', auth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    ...getPostData()
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('new-post', { ...posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;