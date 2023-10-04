const mongoose = require("mongoose");

const Vote = mongoose.model(
  "Vote",
  new mongoose.Schema({
    cant: Number,
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidadate"
      },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table"
    },
  })
);

module.exports = Vote;
