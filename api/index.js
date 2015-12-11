import express from 'express';
import apiController from '../controllers';
import apiUserController from '../controllers/user';

const router = express.Router();

// define the home page route
router.get('/', apiController.indexHandler);

// Router to get/add/update/delete user profile
router.route('/user')
  .get(apiUserController.getUserProfile)
  .post(apiUserController.postUserProfile)
  .put(apiUserController.putUserProfile)
  .delete(apiUserController.deleteUserProfile)

module.exports = router;
