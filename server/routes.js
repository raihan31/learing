/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {
  app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });
  // Insert routes below
  app.use('/api/subscribers', require('./api/subscriber'));
  app.use('/api/offices', require('./api/office'));
  app.use('/api/workshops', require('./api/workshop'));
  app.use('/api/mentors', require('./api/mentor'));
  app.use('/api/portfolios', require('./api/portfolio'));
  app.use('/api/courses', require('./api/course'));
  app.use('/api/teams', require('./api/team'));
  app.use('/api/customer_reviews', require('./api/customer_review'));
  app.use('/api/success_stories', require('./api/success_story'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|uploads)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
