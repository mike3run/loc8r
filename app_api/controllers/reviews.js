// Add the model to control db
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

// Send Json Response built to test the JSONs
var sendJsonResponse = require('./sendJsonResponse');

module.exports.reviewsCreate = function(req, res, next){
  // Awesome stuff here
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = function(req, res, next){
  // Awesome stuff here
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsUpdateOne = function(req, res, next){
  // Awesome stuff here
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function(req, res, next){
  // Awesome stuff here
  sendJsonResponse(res, 200, {"status" : "success"});
};
