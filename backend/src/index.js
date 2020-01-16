const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);
