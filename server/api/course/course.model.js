'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crate = require('mongoose-crate'),
    S3 = require('mongoose-crate-s3'),
    path = require('path'),
    config = require('../../config/environment');

var CourseSchema = new Schema({
  name: String,
  description: String,
  features: [
    {name: String, value: String}
  ],
  icon: String,
  mentors: [{ type: Schema.Types.ObjectId, ref: 'Mentor' }],
  portfolios: [{ type: Schema.Types.ObjectId, ref: 'Portfolio' }]
});
//
// CourseSchema.plugin(crate, {
//   storage: new S3({
//     key: config.AWS.key,
//     secret: config.AWS.secret,
//     bucket: config.AWS.bucket,
//     // acl: '<acl-here>', // defaults to public-read
//     region: config.AWS.region, // defaults to us-standard
//     path: function(attachment) { // where the file is stored in the bucket - defaults to this function
//       return '/courses/' + path.basename(attachment.path)
//     }
//   }),
//   fields: {
//     icon: {}
//   }
// });

module.exports = mongoose.model('Course', CourseSchema);
