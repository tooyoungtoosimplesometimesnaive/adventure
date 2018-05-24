var express = require('express');
var lookup = require('../lookup.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with the lookup result');
});

router.post('/', function(req, res, next) {
  const searchText = req.body.searchText
  lookup(searchText).then(result => {
    res.render('result', result)
  }, error => {
    res.send('respond with the lookup result using post');
  })
});

module.exports = router;
