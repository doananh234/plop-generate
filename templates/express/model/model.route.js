var express = require('express'),
  router = express.Router(),
  {{pluralize name}} = require('./index'),
  auth = require('../../middlewares/authorization');

router.get('/', {{pluralize name}}.all);
router.post('/', auth.authenticate(), {{pluralize name}}.create)
router.get('/:id', {{pluralize name}}.get)
router.patch('/:id', auth.authenticate(), {{pluralize name}}.patch)
router.delete('/:id', auth.authenticate(), {{pluralize name}}.remove)

module.exports = router;
