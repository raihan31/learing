/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Workshop = require('./workshop.model');

exports.register = function(socket) {
  Workshop.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Workshop.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('workshop:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('workshop:remove', doc);
}