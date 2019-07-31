const mongoose = require('mongoose');
const { Schema } = mongoose;

const threadSchema = new Schema({
  code: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('threads', threadSchema);
