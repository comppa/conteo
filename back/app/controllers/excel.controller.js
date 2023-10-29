const db = require("../models");
const User = db.user;
const Role = db.role;
const Local = db.local;
const Table = db.table;

var bcrypt = require("bcryptjs");
// const Cleveros = db.cleveros;

const readXlsxFile = require("read-excel-file/node");

// const upload = async (req, res) => {
//   try {
//     if (req.file == undefined) {
//       return res.status(400).send("Please upload an excel file!");
//     }

//     let path =
//       __basedir + "/resources/static/assets/uploads/" + req.file.filename;

//     readXlsxFile(path).then((rows) => {
//       // skip header
//       rows.shift();

//       let claveros = [];

//       rows.forEach((row) => {
//         let clave = {
//           id: row[0],
//           title: row[1],
//           description: row[2],
//           published: row[3],
//         };

//         claveros.push(clave);
//       });

//       Claveros.insertMany(claveros)
//         .then(() => {
//           res.status(200).send({
//             message: "Uploaded the file successfully: " + req.file.originalname,
//           });
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "Fail to import data into database!",
//             error: error.message,
//           });
//         });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// };

const uploadUsers = async (req, res, next) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then(async (rows) => {
      // skip header
      rows.shift();
      try {
        await rows.forEach( async (row) => {
          let table, local;
          let error = false;
          if (row[6]) {
            local = await Local.findOne({name: row[6]});
          }
          let role = await Role.findOne({name: row[5]});
          let uservalid = await User.findOne({username: row[2]});
          if (uservalid) {
             error = true;
          }
          if (row[7]) {
            table = await Table.findOne({local: local._id, number: row[7].toString()});
            if (table) {
              uservali = await User.findOne({table: table._id});
              if (uservali) {
                error = true;
              }
            }
          }
          const user = new User({
            nit: row[0],
            name: row[1],
            username: row[2],
            password: bcrypt.hashSync(row[3].toString(), 8),
            phone: row[4],
            send: false,
            role: role._id,
            local: local ? (local._id) : (local),
            table: table ? (table._id) : (table)
          });
        
           user.save((err, user) => {
            if (err) {
              // res.status(500).send({ message: err });
              // return;
              console.log(err.code, err.keyValue.username);
              return;
            }
            console.log("se guardo ", user.name)
          });
        });
        res.status(200).send({message: "Uploaded users the file successfully: " + req.file.originalname});
      } catch (error) {
        console.log("no se pudo agregar");
      }
    });
  } catch (error) {
    console.log("no se pudo agregar");
  }
};

// const getCleveros = (req, res) => {
//   Claveros.find({},
//     (err, claveros) => {
//       if (!claveros) {
//         res.status(500).send({ message: "Un error ha ocurrido sacando la informacion!" });
//         return;
//       }
      
//       return res.status(200).json({ success: true, data: claveros})
      
//   })
// };

module.exports = {
  // upload,
  uploadUsers,
  // getCleveros,
};
