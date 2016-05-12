'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crate = require('mongoose-crate'),
    S3 = require('mongoose-crate-s3'),
    path = require('path'),
    GraphicsMagic = require('mongoose-crate-gm'),
    config = require('../../config/environment');

var PortfolioSchema = new Schema({
  name: String,
  subName: String,
  url: String
});

PortfolioSchema.plugin(crate, {
  storage: new S3({
    key: config.AWS.key,
    secret: config.AWS.secret,
    bucket: config.AWS.bucket,
    // acl: '<acl-here>', // defaults to public-read
    region: config.AWS.region, // defaults to us-standard
    path: function(attachment) { // where the file is stored in the bucket - defaults to this function
      return '/protfolios/' + path.basename(attachment.path)
    }
  }),
  fields: {
    image: {
      processor: new GraphicsMagic({
        tmpDir: '/tmp', // Where transformed files are placed before storage, defaults to os.tmpdir()
        formats: ['JPEG', 'GIF', 'PNG'], // Supported formats, defaults to ['JPEG', 'GIF', 'PNG', 'TIFF']
        transforms: {
          original: {
            // keep the original file
          },
          thumb: {
            resize: '360x360@',
            format: '.jpg'
          }
        }
      })
    }
  }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
