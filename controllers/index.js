const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;