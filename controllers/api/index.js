const router = require('express').Router();

router.use('/users', require('./users-routes'));
router.use('/posts', require('./post-routes'));
router.use('/comments', require('./comments-routes'));

module.exports = router;