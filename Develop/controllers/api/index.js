const router = require('express').Router();
const userRoutes = require('./userRoutes');
const skillRoutes = require('./skillRoutes');
const enrolmentRoutes= require('./enrolments');

router.use('/users', userRoutes);
router.use('/skills', skillRoutes);
router.use('/skills/enrolments', enrolmentRoutes)

module.exports = router;
