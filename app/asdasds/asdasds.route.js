var express = require('express'),
  router = express.Router(),
  asdasds = require('./index'),
  auth = require('../../middlewares/authorization');

router.get('/', asdasds.all);
router.post('/', auth.authenticate(), asdasds.create)
router.get('/:id', asdasds.get)
router.patch('/:id', auth.authenticate(), asdasds.patch)
router.delete('/:id', auth.authenticate(), asdasds.remove)

module.exports = router;
