const db = require("../models");
const Role = db.role;
const User = db.user;
const Local = db.local;
const Table = db.table;

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

checkIfSign = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user.sign) {
      res.status(400).send({ message: "Error! El usuario ya ha iniciado sesion" });
      return;
    }
    next();
  });
};

checkIfSend = (req, res, next) => {
  Local.findOne({name: req.body.local },
    (err, pto) => {
      if (!pto) {
        res.status(500).send({ message: "Ingrese un puesto de votación valido" });
        return;
      }
      
      Table.findOne({
            number: req.body.table,
            local: pto._id
      },(err, table) => {
          if (!table) {
              return res.status(400).json({ success: false, error: "Proporcione un numero de mesa" })
          }
          
          if (table.scrutinized) {
            res.status(400).send({ message: "Error! No se puede volver a enviar " });
             return;
           }
          next();
      });
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
            number: req.body.table,
            local: pto._id
      },(err, table) => {
          if (!table) {
              return res.status(400).json({ success: false, error: "Proporcione un numero de mesa" })
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

checkIfTable = (req, res, next) => {
  if (req.body.local) {
    Local.findOne({name: req.body.local },
      (err, pto) => {
        if (!pto) {
          res.status(500).send({ message: "Ingrese un puesto de votación valido" });
          return;
        }
        
        Table.findOne({
              number: req.body.table,
              local: pto._id
        },(err, table) => {
            if (!table) {
                return res.status(400).json({ success: false, error: "Proporcione un numero de mesa" })
            }
            // console.log(table._id);
            User.findOne({
              table: table._id
            }).exec((err, user) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
  
              if (user) {
                res.status(400).send({ message: "La mesa ya tiene un usuario asignado, ingrese otra mesa" });
                return;
              }
              
            });
          next();
        });
    });
  }
}



const verifySignUp = {
  checkDuplicateUsername,
  checkRoleExisted,
  checkUser,
  checkIfTable,
  checkIfSign,
  checkIfSend
};

module.exports = verifySignUp;
