'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  crate = require('mongoose-crate'),
  S3 = require('mongoose-crate-s3'),
  path = require('path'),
  GraphicsMagic = require('mongoose-crate-gm'),
  mongoosePostion = require('../../components/mongoose-position'),
  config = require('../../config/environment');

var socialNetworksSchema = new Schema({
  iconClass: String,
  url: String,
  name: String
});

var MemberSchema = new Schema({
  name: String,
  designation: String,
  socialNetworks: [socialNetworksSchema]
});


MemberSchema.plugin(mongoosePostion, {});

MemberSchema.plugin(crate, {
  storage: new S3({
    key: config.AWS.key,
    secret: config.AWS.secret,
    bucket: config.AWS.bucket,
    // acl: '<acl-here>', // defaults to public-read
    region: config.AWS.region, // defaults to us-standard
    path: function (attachment) { // where the file is stored in the bucket - defaults to this function
      return '/members/' + path.basename(attachment.path)
    }
  }),
  fields: {
    image: {
      processor: new GraphicsMagic({
        tmpDir: '/tmp', // Where transformed files are placed before storage, defaults to os.tmpdir()
        //formats: ['JPEG', 'GIF', 'PNG'], // Supported formats, defaults to ['JPEG', 'GIF', 'PNG', 'TIFF']
        transforms: {
          original: {
            // keep the original file
          },
          thumb: {
            resize: '130x130!',
            format: '.jpg'
          }
        }
      })
    }
  }
});

var TeamSchema = new Schema({
  name: String,
  members: [MemberSchema]
});


TeamSchema.plugin(mongoosePostion, {});


TeamSchema.plugin(crate, {
  storage: new S3({
    key: config.AWS.key,
    secret: config.AWS.secret,
    bucket: config.AWS.bucket,
    // acl: '<acl-here>', // defaults to public-read
    region: config.AWS.region, // defaults to us-standard
    path: function (attachment) { // where the file is stored in the bucket - defaults to this function
      return '/teams/' + path.basename(attachment.path)
    }
  }),
  fields: {
    image: {
      processor: new GraphicsMagic({
        tmpDir: '/tmp', // Where transformed files are placed before storage, defaults to os.tmpdir()
        //formats: ['JPEG', 'GIF', 'PNG'], // Supported formats, defaults to ['JPEG', 'GIF', 'PNG', 'TIFF']
        transforms: {
          original: {
            // keep the original file
          },
          thumb: {
            resize: '130x130!',
            format: '.jpg'
          }
        }
      })
    },
    imageActive: {
      processor: new GraphicsMagic({
        tmpDir: '/tmp', // Where transformed files are placed before storage, defaults to os.tmpdir()
        //formats: ['JPEG', 'GIF', 'PNG'], // Supported formats, defaults to ['JPEG', 'GIF', 'PNG', 'TIFF']
        transforms: {
          original: {
            // keep the original file
          },
          thumb: {
            resize: '130x130!',
            format: '.jpg'
          }
        }
      })
    }
  }
});

var Team = mongoose.model('Team', TeamSchema);
TeamSchema.plugin(mongoosePostion, {});

module.exports = Team;
