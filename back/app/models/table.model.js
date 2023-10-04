const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Table = mongoose.model(
  "Table",
  new mongoose.Schema({
    number: Number,
    local: {
      type: Schema.Types.ObjectId,
      ref: "Local"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  })
);

module.exports = Table;