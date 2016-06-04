// Add the model to control db
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

// Send Json Response built to test the JSONs
var sendJsonResponse = require('./sendJsonResponse');

// Exporting each controller
module.exports.locationsListByDistance = function(req, res, next) {
  // Amazing code here!
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsCreate = function(req, res, next) {
  // Amazing code here!
  sendJsonResponse(res, 200, {"status" : "success"});
 };

module.exports.locationsReadOne = function(req, res, next) {
  // Amazing code here!
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsUpdateOne = function(req, res, next) {
  // Amazing code here!
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function(req, res, next) {
  // Amazing code here!
  sendJsonResponse(res, 200, {"status" : "success"});
};
