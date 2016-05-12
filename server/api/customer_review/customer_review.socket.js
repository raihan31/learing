/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CustomerReview = require('./customer_review.model');

exports.register = function(socket) {
  CustomerReview.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CustomerReview.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('customer_review:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('customer_review:remove', doc);
}