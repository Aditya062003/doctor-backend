const express = require("express");
const { userLogin, bookAppointment } = require("../Controller/userController");
const router = express.Router();

router.post("/login", userLogin);
router.post("/book", bookAppointment);

module.exports = router;
