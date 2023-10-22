const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    nit: String,
    name: String,
    username: String,
    password: String,
    phone: String,
    send: Boolean,
    local:{
      type: Schema.Types.ObjectId,
      ref: "Local"
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role"
    },
    table: {
      type: Schema.Types.ObjectId,
      ref: "Table"
    }
  }, { timestamps: true })
);

module.exports = User;
