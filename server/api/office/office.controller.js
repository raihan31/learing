'use strict';

var _ = require('lodash');
var Office = require('./office.model');

// Get list of offices
exports.index = function (req, res) {
  Office.find(function (err, offices) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(offices);
  });
};

// Get a single office
exports.show = function (req, res) {
  Office.findById(req.params.id, function (err, office) {
    if (err) {
      return handleError(res, err);
    }
    if (!office) {
      return res.status(404).send('Not Found');
    }
    return res.json(office);
  });
};

// Creates a new office in the DB.
exports.create = function (req, res) {
  Office.create(req.body, function (err, office) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(201).json(office);
  });
};

// Updates an existing office in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Office.update({_id: req.params.id}, {$set: req.body}).exec(function (err) {
    if (err) handleError(res, err);
    Office.findById(req.params.id, function (err, office) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(office);
    });
  });

  //
  //Office.findById(req.params.id, function (err, office) {
  //  if (err) { return handleError(res, err); }
  //  if(!office) { return res.status(404).send('Not Found'); }
  //  var updated = _.merge(office, req.body);
  //  updated.save(function (err) {
  //    if (err) { return handleError(res, err); }
  //    return res.status(200).json(office);
  //  });
  //});
};

// Deletes a office from the DB.
exports.destroy = function (req, res) {
  Office.findById(req.params.id, function (err, office) {
    if (err) {
      return handleError(res, err);
    }
    if (!office) {
      return res.status(404).send('Not Found');
    }
    office.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
