const mongoose = require('mongoose');
const { Schema } = mongoose;

const threadSchema = new Schema({
  code: String,
  name: String,
  hex: String,
  hsl: Array,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('threads', threadSchema);
