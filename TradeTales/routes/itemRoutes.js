const express = require('express');
const controller = require('../controllers/itemController');
const {isLoggedin, isAuthor, isNotHost, isOffer, isNotOffer, isNotAuthor} = require('../middlewares/auth');
const {validateId, validateResult, validateStatus, validateTrade} = require('../middlewares/validator');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', isLoggedin, controller.new);

router.post('/', isLoggedin, controller.create);

router.get('/:id', validateId, controller.show);

router.get('/:id/edit', isLoggedin, isAuthor, validateId,validateResult,  controller.edit);

router.put('/:id', isLoggedin, isAuthor, validateId,validateResult, controller.update);

router.delete('/:id', isLoggedin, isAuthor, validateId, validateResult, controller.delete);

router.post('/:id/watch',validateId, validateResult, isLoggedin, isNotAuthor, controller.watch);

router.put('/:id/unwatch', validateId, validateResult, isLoggedin, isNotAuthor, controller.unwatch);

router.get('/:id/trade', validateId, validateResult, validateTrade, isLoggedin, isNotAuthor, controller.trade);

router.put('/:id/offer', validateId, validateResult, isLoggedin, isNotAuthor, controller.offer);

router.get('/:id/manage', validateId, validateResult, isLoggedin, controller.manageOffer);

router.put('/:id/acceptOffer', validateId, validateResult, isLoggedin, isNotOffer, controller.acceptOffer);

router.delete('/:id/rejectOffer', validateId, validateResult, isLoggedin, isNotOffer, controller.rejectOffer);

router.delete('/:id/cancelOffer', validateId, validateResult, isLoggedin, isOffer, controller.cancelOffer);

module.exports = router;