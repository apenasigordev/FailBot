const mongoose = require('mongoose');

mongoose.connect(process.env.mongo,{
  useNewUrlParser: true,
  useUnifiedTopology:true
});
const Schema = mongoose.Schema;

var User = new Schema({
  _id: String,
  config: {
    banner: String,
    about: String,
verified: Boolean,
  },
  banned: Boolean,
  economy: {
    gems: Number,
    coins: Number
  }
});
exports.user = mongoose.model("User", User);