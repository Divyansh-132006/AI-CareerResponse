// models/History.js
import mongoose from 'mongoose';
// const historySchema = new mongoose.Schema({
//   userEmail: { type: String, required: true },
//   type: { type: String, enum: ['roadmap', 'question'], required: true },
//   query: String,
//   response: String,
//   timestamp: { type: Date, default: Date.now }
// });

const historySchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('History', historySchema);
