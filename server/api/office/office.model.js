'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfficeSchema = new Schema({
  name: String,
  address: String,
  phones: [String],
  location: {
    lat: String,
    lng: String
  }
});

module.exports = mongoose.model('Office', OfficeSchema);
