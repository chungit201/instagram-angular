import Like from '../Model/likeModel';

export const showLikeByID = (req, res) => {
  return res.json(req.like);
}



export const likeID = (req, res, next, id) => {
  Like.findById(id).populate('user', 'name')
    .exec((err, like) => {
      if (err || !like) {
        res.status(400).json({
          error: "status not found"
        })
      }
      req.like = like;
      next();
    })
}

export const createLike = (req, res) => {
  let like = new Like(req.body);
  like.save((err, like) => {
    if (err) {
      return res.status(400).json({
        err
      })
    }
    res.json({
      like
    })
  })
}

export const updateLike = (req, res) => {
  let like = req.like;
  like = Object.assign(like, req.body);
  like.save((err, like) => {
    if (err) {
      return res.status(400).json({
        err
      })
    }
    res.json({
      like
    })
  })
}
