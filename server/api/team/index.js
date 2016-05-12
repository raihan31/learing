'use strict';

var express = require('express');
var controller = require('./team.controller');
var auth = require('../../auth/auth.service');

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', auth.hasRole('admin'), multipartyMiddleware, controller.create);
router.put('/:id', auth.hasRole('admin'), multipartyMiddleware, controller.update);
router.patch('/:id', auth.hasRole('admin'), multipartyMiddleware, controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.post('/upload', multipartyMiddleware, controller.upload);
router.post('/member', multipartyMiddleware, controller.createTeamMember);
router.put('/member/:id', multipartyMiddleware, controller.updateTeamMember);
router.delete('/:teamId/member/:id', controller.removeTeamMember);

module.exports = router;
