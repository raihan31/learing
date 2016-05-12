'use strict';

var _ = require('lodash');
var Workshop = require('./workshop.model');

// Get list of workshops
exports.index = function (req, res) {
  Workshop.find(function (err, workshops) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(workshops);
  });
};

// Get a single workshop
exports.show = function (req, res) {
  Workshop.findById(req.params.id, function (err, workshop) {
    if (err) {
      return handleError(res, err);
    }
    if (!workshop) {
      return res.status(404).send('Not Found');
    }
    return res.json(workshop);
  });
};

// Creates a new workshop in the DB.
exports.create = function (req, res) {
  var workshop = req.body.workshop;
  Workshop.create(workshop, function (err, workshop) {
    if (err) {
      return handleError(res, err);
    }
    uploadImage(req, res, workshop)
  });
};

// Updates an existing workshop in the DB.
exports.update = function (req, res) {
  var paramsWorkshop = req.body.workshop;
  if (paramsWorkshop._id) {
    delete paramsWorkshop._id;
  }
  if (paramsWorkshop.image) {
    delete paramsWorkshop.image;
  }
  console.log(paramsWorkshop);

  Workshop.findById(req.params.id, function (err, workshop) {
    if (err) {
      return handleError(res, err);
    }
    if (!workshop) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(workshop, paramsWorkshop);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      uploadImage(req, res, workshop);
    });
  });
};

// Deletes a workshop from the DB.
exports.destroy = function (req, res) {
  Workshop.findById(req.params.id, function (err, workshop) {
    if (err) {
      return handleError(res, err);
    }
    if (!workshop) {
      return res.status(404).send('Not Found');
    }
    workshop.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

function uploadImage(req, res, workshop) {
  if (req.files) {
    workshop.attach('image', req.files.file, function (err) {
      if (err) return console.log(err);
      workshop.save(function (err) {
        if (err) return console.log(err);
        return res.status(201).json(workshop);
      });
    });
  }
  else {
    return res.status(201).json(workshop);
  }
}

function handleError(res, err) {
  return res.status(500).send(err);
}
