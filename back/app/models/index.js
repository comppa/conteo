const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.vote = require("./vote.model");
db.table = require("./table.model");
db.candidate = require("./candidate.model");
db.local = require("./local.model");


db.ROLES = ["admin", "candidato", "testigo", "coordinador", "escrutador"];

module.exports = db;
