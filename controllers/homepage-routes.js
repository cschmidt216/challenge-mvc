const router = require('express').Router();
const { Post, Users, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: Users,
            attributes: ['username', 'twitter', 'github'],
          },
        },
        {
          model: Users,
          attributes: ['username', 'twitter', 'github'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('landing-page', {
      ...posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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

router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: Users,
            attributes: ['username', 'twitter', 'github'],
          },
        },
        {
          model: Users,
          attributes: ['username', 'twitter', 'github'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('view-post', {
      ...post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;