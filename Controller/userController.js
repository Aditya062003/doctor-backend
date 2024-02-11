const Book = require("../Model/bookModel");
const User = require("../Model/userModel");

exports.userLogin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    const newUser = await user.save();
    res.status(200).json({ newUser });
  } catch (error) {
    next(error);
  }
};

exports.bookAppointment = async (req, res, next) => {
  try {
    const { firstname, lastname, phone, email } = req.body;
    const book = new Book({ firstname, lastname, phone, email });
    const newUser = await book.save();
    res.status(200).json({ newUser });
  } catch (error) {
    next(error);
  }
};
