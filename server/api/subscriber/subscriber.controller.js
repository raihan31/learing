'use strict';

var _ = require('lodash');
var Subscriber = require('./subscriber.model');

// Get list of subscribers
exports.index = function(req, res) {
  Subscriber.find(function (err, subscribers) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(subscribers);
  });
};

// Get a single subscriber
exports.show = function(req, res) {
  Subscriber.findById(req.params.id, function (err, subscriber) {
    if(err) { return handleError(res, err); }
    if(!subscriber) { return res.status(404).send('Not Found'); }
    return res.json(subscriber);
  });
};

// Creates a new subscriber in the DB.
exports.create = function(req, res) {
  Subscriber.create(req.body, function(err, subscriber) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(subscriber);
  });
};

// Updates an existing subscriber in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Subscriber.findById(req.params.id, function (err, subscriber) {
    if (err) { return handleError(res, err); }
    if(!subscriber) { return res.status(404).send('Not Found'); }
    var updated = _.merge(subscriber, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(subscriber);
    });
  });
};

// Deletes a subscriber from the DB.
exports.destroy = function(req, res) {
  Subscriber.findById(req.params.id, function (err, subscriber) {
    if(err) { return handleError(res, err); }
    if(!subscriber) { return res.status(404).send('Not Found'); }
    subscriber.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}