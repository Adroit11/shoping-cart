import express from 'express';
import apiController from '../controllers';
import apiOrderController from '../controllers/order';

const router = express.Router();

// define the home page route
router.get('/', apiController.indexHandler);

// Router to update order
router.post('/order', apiOrderController.postOrder)
module.exports = router;
