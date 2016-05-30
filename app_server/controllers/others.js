'use strict';

var aboutController = function(req, res, next) {
  res.render('generic-text',{
    title : 'About'
  });
};

module.exports.about = aboutController;
