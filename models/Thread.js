const mongoose = require('mongoose');
const { Schema } = mongoose;

const threadSchema = new Schema({
  code: String
});

mongoose.model('threads', threadSchema);
