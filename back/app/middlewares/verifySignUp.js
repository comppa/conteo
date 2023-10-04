const db = require("../models");
const Role = db.role;
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    next();
  });
};

checkRoleExisted = (req, res, next) => {
  Role.findOne({
    name: req.body.role
  }).exec((err, role) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!role) {
      res.status(400).send({ message: "Failed! Role does not exist!" });
      return;
    }
    next();

  });
};

checkUser = (req, res, next) => {
  Local.findOne({name: req.body.local },
    (err, pto) => {
      if (!pto) {
        res.status(500).send({ message: "Ingrese un puesto de votación valido" });
        return;
      }
      
      Table.findOne({
            number: req.body.number,
            local: pto._id
      },(err, table) => {
          if (!table) {
              return res.status(400).json({ success: false, error: "Proporcione una numero de mesa" })
          }
          
          User.findOne({
            username: req.body.username
          }).exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
        
            if (!user) {
              res.status(400).send({ message: "Se necesita un usuario con rol de testigo!" });
              return;
            }

            if (user._id != table.owner) {
              res.status(400).send({ message: "El usuario debe asignado a la mesa debe de ser igual al usuario que ingresa los votos" });
              return;
            }
            
            next();
          });

      });
  });
}

const verifySignUp = {
  checkDuplicateUsername,
  checkRoleExisted,
  checkUser
};

module.exports = verifySignUp;
