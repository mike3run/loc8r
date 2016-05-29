'use strict';

var aboutController = function(req, res, next) {
  res.render('index',{
    title : 'About'
  });
};

module.exports.about = aboutController;
