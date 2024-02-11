const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("USER", userSchema);
