const router = require('express').Router();
const cultures = require('./cultures');
const tours = require('./tours');

router.use('/', cultures);
router.use('/', tours);

module.exports = router;