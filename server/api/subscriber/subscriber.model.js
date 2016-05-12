'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubscriberSchema = new Schema({
  email: String
});

SubscriberSchema.path('email').validate(function(value, done) {
  this.model('Subscriber').count({ email: value }, function(err, count) {
    if (err) {
        return done(err);
    }
    // If `count` is greater than zero, "invalidate"
    done(!count);
  });
}, 'Email already exists');

module.exports = mongoose.model('Subscriber', SubscriberSchema);
