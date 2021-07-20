const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8000;

const app = express();

// set up middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// set up mongo database
var MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/budget";
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

})
// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
