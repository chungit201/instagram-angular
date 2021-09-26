import mongoose from 'mongoose';
const {
  ObjectId
} = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: ObjectId,
    ref: 'Status',
    required: true,
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Comments', commentSchema);
