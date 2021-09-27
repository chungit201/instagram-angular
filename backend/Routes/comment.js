import express from 'express';
import {
  addComment,
  commentID,
  updateComment,
  listComment,
  removeComment
} from '../Controllers/commentControllers';
const router = express.Router();

router.get('/comment', listComment);
// router.get('/comment/:commentID', ); bảo trì chưa hoàn thiện
router.post('/comment/create', addComment);
router.put('/comment/update/:commentID', updateComment);
router.delete('/comment/remove/:commentID', removeComment);
router.param('commentID', commentID);

module.exports = router;
