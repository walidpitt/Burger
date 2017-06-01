var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/index', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    }

    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res) {
  console.log(req.body)

  burger.create(req.body.burgername, function(data) {
    res.redirect('/index')
  });
});

router.post('/burgers/update/:id', function(req, res) {
  var id = req.params.id;
  console.log(req.body)
  console.log('id = ' + id)

  burger.update(id, function(data) {
    res.redirect('/index');
  });
});

router.get('/cleartable', function(req, res) {
  console.log(req.body)

  burger.delete(function(data) {
    res.redirect('/index')
  });
});

module.exports = router;