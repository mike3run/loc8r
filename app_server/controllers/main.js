'use strict';

var homepageController = function(req, res, next) {
  res.render('index',{
    title : 'Express',
    name : 'Miguel'
  });
};

module.exports.index = homepageController;
