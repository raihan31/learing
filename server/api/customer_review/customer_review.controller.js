'use strict';

var _ = require('lodash');
var CustomerReview = require('./customer_review.model');

// Get list of customer_reviews
exports.index = function(req, res) {
  CustomerReview.find(function (err, customer_reviews) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(customer_reviews);
  });
};

// Get a single customer_review
exports.show = function(req, res) {
  CustomerReview.findById(req.params.id, function (err, customer_review) {
    if(err) { return handleError(res, err); }
    if(!customer_review) { return res.status(404).send('Not Found'); }
    return res.json(customer_review);
  });
};

// Creates a new customer_review in the DB.
exports.create = function(req, res) {
  CustomerReview.create(req.body, function(err, customer_review) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(customer_review);
  });
};

//exports.upload = function(req, res) {
//  var file = req.files.file;
//  var tmp_path = file.path;
//  var fs = require('fs.extra');
//  var hash = require('crypto').randomBytes(16).toString('hex');
//  var target_path = 'client/uploads/customer_review/' + hash + '_' + file.name;
//  fs.move(tmp_path, target_path, function(err) {
//    if (err) throw err;
//    var upload_image = {path: '/uploads/customer_review/' + hash + '_' + file.name};
//    return res.status(201).json(upload_image);
//  });
//};

// Updates an existing customer_review in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  CustomerReview.findById(req.params.id, function (err, customer_review) {
    if (err) { return handleError(res, err); }
    if(!customer_review) { return res.status(404).send('Not Found'); }
    var updated = _.merge(customer_review, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(customer_review);
    });
  });
};

// Deletes a customer_review from the DB.
exports.destroy = function(req, res) {
  CustomerReview.findById(req.params.id, function (err, customer_review) {
    if(err) { return handleError(res, err); }
    if(!customer_review) { return res.status(404).send('Not Found'); }
    customer_review.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
