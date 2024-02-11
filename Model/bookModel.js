const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = model("Book", bookSchema);
