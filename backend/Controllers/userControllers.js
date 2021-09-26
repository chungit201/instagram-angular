import User from '../Model/userModel';

// lấy id của profile
export const userID = (req, res, next, id) => {
  console.log(id);
  User.findById(id).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "User not found"
      })
    }
    req.profile = user;
    next();
  })
}

// hiển thị chi tiết profile
export const userDetail = (req, res) => {
  return res.json(req.profile);
}

// cập nhật profile
export const updateUser = (req, res) => {
  User.findOneAndUpdate({
    _id: req.profile._id
  }, {
    $set: req.body
  }, {
    new: true
  }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'You are not authorized to perform in action'
      })
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user)
  })
}
