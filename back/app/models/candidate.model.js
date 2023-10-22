const mongoose = require("mongoose");

const Candidate = mongoose.model(
  "Candidate",
  new mongoose.Schema({
    number: Number,
    name: String,
    coorporation: String,
    total: Number
  }, { timestamps: true })
);

module.exports = Candidate;