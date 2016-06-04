// Add the model to control db
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

// Send Json Response built to test the JSONs
var sendJsonResponse = require('./sendJsonResponse');

// Exporting each controller
module.exports.locationsListByDistance = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsCreate = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "success"});
 };

// GET A SINGLE LOCATION BY ID
module.exports.locationsReadOne = function(req, res) {
  // Check if a parameter is supplied and it includes a location id
  if (req.params && req.params.locationid) {
    Loc
      // Look for that locationid on the database
      .findById(req.params.locationid)
      .exec(function (err, location) {
        // If there is no location found with that id
        if (!location) {
          sendJsonResponse(res, 404, {"message" : "locationid not found"});
          return;
        // If there is an error
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        // Successful response
        sendJsonResponse(res, 200, {
          "status" : 200,
          "data" : location
        });
      });
  // In case there is no locationid on the request let the user know
  } else {
    sendJsonResponse(res, 404, { "message" : "No locationid in request"});
  }
};

module.exports.locationsUpdateOne = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function(req, res, next) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
