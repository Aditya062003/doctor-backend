const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET , POST , PUT , DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

app.use("/api", userRoutes);

app.use("*", (req, res, next) => {
  const error = {
    status: 404,
    message: "API_ENDPOINT_NOT_FOUND",
  };
  next(error);
});

async function main() {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database connected");

    app.listen(5000, () => console.log(`Server listening on port 5000`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();

module.exports = app;
