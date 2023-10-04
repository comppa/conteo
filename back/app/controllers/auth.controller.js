const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Local = db.local;
const Table = db.table;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    nit: req.body.nit,
    name: req.body.name,
    phone: req.body.phone,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.role ) {
      Role.findOne({name: req.body.role}, (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.role = role._id;
          if (req.body.local) {
             Local.findOne({name: req.body.local}, (err, local) =>{
                if (!local) {
                  res.status(500).send({ message: err });
                  return;
                }
                Table.findOne({number: req.body.table, local: local._id}, (err, table) =>{

                  if (!table) {
                    res.status(500).send({ message: err });
                    return;
                  }
                  table.owner = user._id
                  table.save(err => {
                    if (err) {
                      res.status(500).send({ message: err });
                      return;
                    }
        
                    res.send({ message: "El usuario fue registrado exitosamente!" });
                  });

                  user.table = table._id
                  user.save(err => {
                    if (err) {
                      res.status(500).send({ message: err });
                      return;
                    }
        
                    res.send({ message: "El usuario fue registrado exitosamente!" });
                  });
                });
             });
          }else{
            user.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
  
              res.send({ message: "El usuario fue registrado exitosamente!" });
            });
          }
          
        }
      );
    } else {
      Role.findOne({ name: "testigo" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.role = role._id;
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("role", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
        

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

      var authorities = "ROLE_" + user.role.name.toUpperCase();
      res.status(200).send({id: user._id, username: user.username, role: authorities, accessToken: token });
    });
};

exports.getusers = (req, res ) =>{
  User.find({},(err, users) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }
    if (!users.length) {   
        return res
            .status(404)
            .json({ success: false, error: 'users not found' })
    }
  return res.status(200).json({ success: true, data: users})
  }).populate('role').clone().catch(err => console.log(err))
};


exports.getuser = (req, res ) =>{
  User.findOne({username: req.body.username},(err, user) => {
    if (!user) {
        return res.status(400).json({ success: false, error: "El usuario " + req.body.username +" no existe, ingresa un usuario valido" });
    }
  return res.status(200).json({ success: true, data: user})
  }).clone().catch(err => console.log(err))
};


exports.update = (req, res) => {
  User.findOne({username: req.body.username},(err, user) => {
      if (!user) {
          return res.status(404).json({ success: false, error: "El usuario " + req.body.username +" no existe, ingresa un usuario valido" });
      }

     if(req.body.name){
       user.name= req.body.name;
     }
     if(req.body.username){
       user.username= req.body.username;
     }
     if(req.body.password){
       user.password= req.body.password;
     }
     if (req.body.role) {
      Role.findOne({name: req.body.role}, (err, role) => {
          if (!role) {
            res.status(500).send({ message: "Ingrese un rol valido" });
            return;
          }

          user.role = role._id;
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "El usuario fue actualizado exitosamente!" });
          });
        }
      );
    } else {
      user.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({ message: "El usuario fue actualizado exitosamente!" });
 
      });
    }
   });
}