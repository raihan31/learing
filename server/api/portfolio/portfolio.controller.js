'use strict';

var _ = require('lodash');
var Portfolio = require('./portfolio.model');

// Get list of portfolios
exports.index = function(req, res) {
  Portfolio.find(function (err, portfolios) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(portfolios);
  });
};

// Get a single portfolio
exports.show = function(req, res) {
  Portfolio.findById(req.params.id, function (err, portfolio) {
    if(err) { return handleError(res, err); }
    if(!portfolio) { return res.status(404).send('Not Found'); }
    return res.json(portfolio);
  });
};

// Creates a new portfolio in the DB.
exports.create = function (req, res) {
  var portfolio = req.body.portfolio;
  Portfolio.create(portfolio, function (err, portfolio) {
    if (err) {
      return handleError(res, err);
    }
    uploadImage(req, res, portfolio)
  });
};

// Updates an existing portfolio in the DB.
exports.update = function (req, res) {
  var paramsPortfolio = req.body.portfolio;
  if (paramsPortfolio._id) {
    delete paramsPortfolio._id;
  }
  if (paramsPortfolio.image) {
    delete paramsPortfolio.image;
  }
  Portfolio.findById(req.params.id, function (err, portfolio) {
    if (err) {
      return handleError(res, err);
    }
    if (!portfolio) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(portfolio, paramsPortfolio);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      uploadImage(req, res, portfolio);
    });
  });
};

// Deletes a portfolio from the DB.
exports.destroy = function(req, res) {
  Portfolio.findById(req.params.id, function (err, portfolio) {
    if(err) { return handleError(res, err); }
    if(!portfolio) { return res.status(404).send('Not Found'); }
    portfolio.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function uploadImage(req, res, portfolio) {
  if (req.files) {
    portfolio.attach('image', req.files.file, function (err) {
      if (err) return console.log(err);
      portfolio.save(function (err) {
        if (err) return console.log(err);
        return res.status(201).json(portfolio);
      });
    });
  }
  else {
    return res.status(201).json(portfolio);
  }
}

function handleError(res, err) {
  return res.status(500).send(err);
}
