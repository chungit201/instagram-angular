import Friend from '../Model/friendModel';

export const addfriend = (req, res) => {
  const friend = new Friend(req.body);
  friend.save((err, friend) => {
    if (err) {
      return res.status(400).json({
        err,
        message: "failed to send friend request"
      })
    }
    res.json({
      friend,
      message: "Friend request sent successfully"
    })
  })
}

export const friendID = (req, res, next, id) => {
  Friend.findById(id).exec((err, friend) => {
    if (err) {
      return res.status(400).json({
        err,
        error: "friend not found"
      })
    }
    req.friend = friend;
    next();
  })
}

export const removeFriend = (req, res) => {
  let comment = req.comment;
  comment.delete((err, comment) => {
    if (err) {
      return res.status(400).json({
        err,
        error: "friend unfollow failure"
      })
    }
    res.json({
      friend,
      message: "friend unfollow successfully"
    })
  })
}

export const updateFriend = (req, res) => {
  let friend = req.friend;
  friend = Object.assign(friend, req.body);
  friend.save((err, friend) => {
    if (err || !friend) {
      return res.status(400).json({
        err,
        message: "Update friend failure"
      })
    }
    res.json({
      friend,
      message: "update friend successfully"
    })
  })
}
