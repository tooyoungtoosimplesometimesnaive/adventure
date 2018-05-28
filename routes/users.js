var express = require('express');
var router = express.Router();

const T_S = require('../js/t-to-s-map')
const S_T = require('../js/s-to-t-map')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Doing the transform from simplified and traditional
 * Chinese, or in a reverse way.
 *
 * @method: POST
 */
router.post('/transform', function(req, res, next) {
  req.accepts('application/json')
  let text = req.body.text

  const Map = req.body.isT ? T_S : S_T

  text = text.replace(/[^\x00-\xFF]/g, function(s){ return ((s in Map)?Map[s]:s)})

  res.send(text)
});
module.exports = router;
