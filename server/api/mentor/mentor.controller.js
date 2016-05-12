'use strict';

var _ = require('lodash');
var Mentor = require('./mentor.model');

// Get list of mentors
exports.index = function (req, res) {
  Mentor.find(function (err, mentors) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(mentors);
  });
};

// Get a single mentor
exports.show = function (req, res) {
  Mentor.findById(req.params.id, function (err, mentor) {
    if (err) {
      return handleError(res, err);
    }
    if (!mentor) {
      return res.status(404).send('Not Found');
    }
    return res.json(mentor);
  });
};

// Creates a new mentor in the DB.
exports.create = function (req, res) {
  var paramsMentor = req.body.mentor;
  Mentor.create(paramsMentor, function (err, mentor) {
    if (err) {
      return handleError(res, err);
    }
    uploadImage(req, res, mentor);
  });
};

// Updates an existing mentor in the DB.
exports.update = function (req, res) {

  var paramsMentor = req.body.mentor;
  if (paramsMentor._id) {
    delete paramsMentor._id;
  }
  if (paramsMentor.hasOwnProperty('image')) {
    delete paramsMentor.image;
  }
  if (paramsMentor.skills && paramsMentor.skills.length) {
    paramsMentor.skills.forEach(function (skill, index) {
      delete skill._id;
    });
  }
  var updateError = '';
  Mentor.update({_id: req.params.id}, {$set: paramsMentor}).exec(function (err) {
    if (err) updateError = err;
  });

  if (updateError) {
    handleError(res, updateError);
  }
  else {
    Mentor.findById(req.params.id, function (err, mentor) {
      return uploadImage(req, res, mentor);
    });
  }

};

// Deletes a mentor from the DB.
exports.destroy = function (req, res) {
  Mentor.findById(req.params.id, function (err, mentor) {
    if (err) {
      return handleError(res, err);
    }
    if (!mentor) {
      return res.status(404).send('Not Found');
    }
    mentor.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

function uploadImage(req, res, mentor) {
  if (req.files) {
    mentor.attach('image', req.files.file, function (err) {
      if (err) return console.log(err);
      mentor.save(function (err) {
        if (err) return console.log(err);
        return res.status(201).json(mentor);
      });
    });
  }
  else {
    return res.status(201).json(mentor);
  }
}

function handleError(res, err) {
  return res.status(500).send(err);
}
