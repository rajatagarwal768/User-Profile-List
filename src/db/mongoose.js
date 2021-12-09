const mongoose = require("mongoose");

//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/Profile", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
