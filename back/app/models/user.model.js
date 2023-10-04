const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    nit: Number,
    name: String,
    username: String,
    password: String,
    phone: Number,
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role"
    },
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table"
    }
  })
);

module.exports = User;
