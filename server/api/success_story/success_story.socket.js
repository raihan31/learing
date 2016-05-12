/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SuccessStory = require('./success_story.model');

exports.register = function(socket) {
  SuccessStory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SuccessStory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('success_story:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('success_story:remove', doc);
}