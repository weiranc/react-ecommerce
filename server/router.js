const router = require('express').Router();
const controller = require('./controller.js');

router.route('/products').get(controller.getAll);
router.route('/carts').get(controller.getCart);
router
  .route('/carts/:id')
  .post(controller.addToCart)
  .put(controller.updateCart)
  .delete(controller.removeFromCart);

module.exports = router;
