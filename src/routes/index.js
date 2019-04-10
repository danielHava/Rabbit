const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Hey', 
    heading: 'Hello!',
    messages: [
      "carrot",
      "potato",
      "beet"
    ]
  });
});

module.exports = router;
