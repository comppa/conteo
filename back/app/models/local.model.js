const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Local = mongoose.model(
  "Local",
  new mongoose.Schema({
    number: Number,
    name: String
  })
);

module.exports = Local;