var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('todo', {title: req.query.title});
});

module.exports = router;