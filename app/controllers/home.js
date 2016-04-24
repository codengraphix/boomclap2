var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

var fs = require('fs');
var path = require('path');

var root = fs.realpathSync('.');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.sendFile(path.join(root, './index.html'))
});
