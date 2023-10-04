const mongoose = require("mongoose");

const Candidate = mongoose.model(
  "Candidate",
  new mongoose.Schema({
    number: Number,
    name: String
  })
);

module.exports = Candidate;