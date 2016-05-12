'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerReviewSchema = new Schema({
  name: String,
  designation: String,
  review: String
});

module.exports = mongoose.model('CustomerReview', CustomerReviewSchema);
