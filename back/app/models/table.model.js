const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Table = mongoose.model(
  "Table",
  new mongoose.Schema({
    number: Number,
    observations: [String],
    scrutinized: Boolean,
    tvotes: Number,
    rconts: Boolean,
    local: {
      type: Schema.Types.ObjectId,
      ref: "Local"
    },
    votes:[{
      type: Schema.Types.ObjectId,
      ref: "Vote"
    }]
  }, { timestamps: true })
);

module.exports = Table;