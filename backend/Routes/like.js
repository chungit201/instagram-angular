import express from 'express';
import {
  showLikeByID,
  likeID,
  createLike,
  updateLike
} from '../Controllers/likeControllers';
const router = express.Router();
router.get('/like/:likeID', showLikeByID);
router.post('/like/create', createLike);
router.put('/like/update/:likeID', updateLike);


router.param('likeID', likeID)

module.exports = router;
