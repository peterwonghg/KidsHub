const router = require('express').Router();
const apiRoutes = require('./api/index');
const webRoutes = require('./web/homeRoutes');

router.use('/api', apiRoutes);
router.use(webRoutes);

module.exports = router;
