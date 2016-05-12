'use strict';

var _ = require('lodash');
var SuccessStory = require('./success_story.model');

// Get list of success_storys
exports.index = function (req, res) {
  SuccessStory.find(function (err, success_storys) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(success_storys);
  });
};

// Get a single success_story
exports.show = function (req, res) {
  SuccessStory.findById(req.params.id, function (err, success_story) {
    if (err) {
      return handleError(res, err);
    }
    if (!success_story) {
      return res.status(404).send('Not Found');
    }
    return res.json(success_story);
  });
};

// Creates a new success_story in the DB.
exports.create = function (req, res) {
  SuccessStory.create(req.body.successStory, function (err, success_story) {
    if (err) {
      return handleError(res, err);
    }
    return uploadImage(req, res, success_story);
  });
};

exports.upload = function (req, res) {
  var file = req.files.file;
  var tmp_path = file.path;
  SuccessStory.findOne({_id: req.params.id}).exec(function (err, doc) {
    doc.attach('image', {path: file.path}, function (err) {
      doc.save(function (err) {

      })
    });
  });
};

// Updates an existing success_story in the DB.
exports.update = function (req, res) {
  var successStory = req.body.successStory;
  if (successStory._id) {
    delete successStory._id;
  }
  if (successStory.socialNetworks && successStory.socialNetworks.length) {
    successStory.socialNetworks.forEach(function (network, index) {
      delete network._id;
    });
  }
  var updateError = '';
  SuccessStory.update({_id: req.params.id}, {$set: successStory}).exec(function (err) {
    if (err) updateError = err;
  });

  if(updateError) {
    handleError(res, updateError);
  }
  else {
    SuccessStory.findById(req.params.id, function (err, success_story) {
      return uploadImage(req, res, success_story);
    });
  }
};

// Deletes a success_story from the DB.
exports.destroy = function (req, res) {
  SuccessStory.findById(req.params.id, function (err, success_story) {
    if (err) {
      return handleError(res, err);
    }
    if (!success_story) {
      return res.status(404).send('Not Found');
    }
    success_story.remove(function (err) {
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

function uploadImage(req, res, success_story) {
  if (req.files) {
    success_story.attach('image', req.files.file, function (err) {
      if (err) return console.log(err);
      success_story.save(function (err) {
        if (err) return console.log(err);
        return res.status(201).json(success_story);
      });
    });
  }
  else {
    return res.status(201).json(success_story);
  }
}
