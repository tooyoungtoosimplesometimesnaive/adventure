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
  let title = req.body.title
  const isT = req.body.isT

  const Map = isT ? T_S : S_T

  text = text.replace(/[^\x00-\xFF]/g, s => (s in Map)?Map[s]:s)
  title = title.replace(/[^\x00-\xFF]/g, s => (s in Map)?Map[s]:s)

  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
    isT : !isT,
    text: text,
    title: title
  }))
});
module.exports = router;
