const db = require("../models");
const Table = db.table;
const Local = db.local;
const User = db.user;
const Role = db.role;

getTables = (req, res) => {
    Local.findOne({name: req.body.local },
    (err, pto) => {
      if (!pto) {
        res.status(500).send({ message: "Ingrese un puesto de votación valido" });
        return;
      }
      
      Table.find({
            local: pto._id
      },(err, tables) => {
          if (err) {
              return res.status(400).json({ success: false, error: err })
          }
          if (!tables.length) {   
              return res
                  .status(404)
                  .json({ success: false, error: 'candidate not found' })
          }
      return res.status(200).json({ success: true, data: tables})
      }).clone().catch(err => console.log(err))
    });
};

gettable = (req, res) => {
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
          return res.status(200).json({ success: true, data: table})
          }).clone().catch(err => console.log(err));
    });
};

updatetable = (req, res) => {
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
              if (err) {
                  return res.status(400).json({ success: false, error: err })
              }

              if(req.body.owner){
                User.findOne({username: req.body.owner}, (err, user) => {
                    if (!user) {
                      res.status(500).send({ message: "Ingrese un usuario valido" });
                      return;
                    }

                    Role.findOne({ name: "testigo" }, (err, role) => {
                        if (err) {
                          res.status(500).send({ message: err });
                          return;
                        }
                        
                        if (role._id != user.role) {
                            res.status(500).send({ message: "Ingrese un usuario con rol" + role.name });
                            return;
                        }
                        });
          
                    table.owner = user._id;
                    table.save(err => {
                      if (err) {
                        res.status(500).send({ message: err });
                        return;
                      }
          
                      res.send({ message: "La tabla esta asignada a "+ user.name + " fue actualizado exitosamente!" });
                    });
                  });
              };
          });
    });
};


getTableByUserId = (req, res) => {
  Table.findOne({owner: req.body.user },
      (err, table) => {
        if (!table) {
          res.status(500).send({ message: "El usuario no tiene una mesa activa" });
          return;
        }

        Local.findOne({
          _id: table.local
        },(err, local) => {
            if (!local) {
                return res.status(400).json({ success: false, error: "Proporcione una numero de mesa" })
            }
        return res.status(200).json({ number: table.number, local: local.name})
        }).clone().catch(err => console.log(err));

    });
};


module.exports = {
    getTables,
    gettable,
    updatetable,
    getTableByUserId
};