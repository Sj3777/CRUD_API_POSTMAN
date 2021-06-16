const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
