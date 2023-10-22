const mongoose = require("mongoose");

const Vote = mongoose.model(
  "Vote",
  new mongoose.Schema({
    cant: Number,
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate"
      },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table"
    },
  }, { timestamps: true })
);

module.exports = Vote;
