const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    nit: {
      type: String,
      unique: true
    },
    name: String,
    username: {
      type: String,
      unique: true
    },
    password: String,
    phone: String,
    send: Boolean,
    sign: Boolean,
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
      ref: "Table",
      unique: true
    }
  }, { timestamps: true })
);

module.exports = User;
