import express from 'express';
import {
  userID,
  userDetail,
  updateUser
} from '../Controllers/userControllers';
const router = express.Router();

router.get('/profile/:userID', userDetail);
router.put('/profile/update/:userID', updateUser);

router.param('userID', userID);
module.exports = router;
