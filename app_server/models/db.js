var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
// If on production use MONGOLAB_URI
// heroku config:set MONGOLAB_URL=URIHEREHEREHERE

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}

// Now we connect to the database :)
mongoose.connect(dbURI);


mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err );
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has been disconnected');
});

// Gracefull shutdowns
var gracefulShutDown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// When NodeMond restarts
process.once('SIGUSR2', function(){
  gracefulShutDown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', function(){
  gracefulShutDown('app termination', function() {
    process.exit(0);
  });
});

// For heroku app termination
process.on('SIGTERM', function() {
  gracefulShutDown('Heroku app shutdown', function() {
    process.exit(0);
  });
});

// Lets require everything else
require('./locations');
