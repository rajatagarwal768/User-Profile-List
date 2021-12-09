const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = User;
