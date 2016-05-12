'use strict';

var express = require('express');
var controller = require('./customer_review.controller');
var auth = require('../../auth/auth.service');
var multiparty = require('connect-multiparty');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
