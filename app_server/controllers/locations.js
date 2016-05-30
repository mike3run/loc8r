'use strict';

// Home Page
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', {title : 'Home'});
};

// Location Info
module.exports.locationInfo = function(req, res, next) {
  res.render('index', {title : 'Location info'});
};

// Add Review Page
module.exports.addReview = function(req, res, next) {
  res.render('index', {title : 'Add Review'});
};
