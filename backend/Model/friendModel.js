import mongoose from 'mongoose';
const {
  ObjectId
} = mongoose.Schema;
const friendSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  friends: {
    type: Object,
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Friend', friendSchema);
