import express from 'express';
import {
  listStatus,
  statusID,
  statusDetail,
  removeStatus,
  createStatus,
  updateStatus
} from '../Controllers/statusControllers';
const router = express.Router();

router.get('/post', listStatus);
router.get('/post/detail/:postID', statusDetail);
router.post('/post/create', createStatus);
router.put('/post/update/:postID', updateStatus);
router.delete('/post/remove/:postID', removeStatus);

router.param('postID', statusID);

module.exports = router;
