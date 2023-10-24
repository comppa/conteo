const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Local = db.local;
const Table = db.table;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { log } = require("async");

exports.signup = (req, res) => {
  const user = new User({
    nit: req.body.nit,
    name: req.body.name,
    phone: req.body.phone,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    send: false
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
                  
                  user.table = table._id; 
                  user.local = local._id;
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
    .populate('role')
    .populate('local')
    .populate('table')
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
          message: "Revisa la contraseña!"
        });
      }

      const token = jwt.sign({ id: user._id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

      var authorities = "ROLE_" + user.role.name.toUpperCase();

      if(user.role.name === "testigo"){
        res.status(200).send({id: user._id, username: user.username, nit: user.nit, name: user.name, role: authorities, accessToken: token, phone: user.phone, local: user.local.name, table: user.table.number, send: user.table.scrutinized});

      }else{
        res.status(200).send({id: user._id, username: user.username, nit: user.nit, name: user.name, role: authorities, accessToken: token, phone: user.phone});
      }
      // console.log(user.table.number);
    });
};

exports.getusers = async (req, res ) =>{
  let users;
  let results = [];
  try {
    users = await User.find({}).populate('role').populate('local').populate('table');
    if (!users.length) {   
        return res.status(404).json({ success: false, error: 'no se encontraro usuarios' })
      }
    for (let i = 0; i < users.length; i++) {
      results.push({ nit: users[i].nit ? users[i].nit : "", name: users[i].name, phone: users[i].phone ? users[i].phone : "", username: users[i].username, role: users[i].role.name,  local: users[i].local ? users[i].local.name : "",  table: users[i].table ? users[i].table.number : ""});
    }
    return res.status(200).json({ success: true, data: results});
  } catch (error) {
    return res.status(400).json({ success: false, error: error })
  }
  // User.find({}).populate('role').populate('local').populate('table').exec((err, users) => {
  //   if (err) {
  //   }
  //   
  
  // }).populate('role').clone().catch(err => console.log(err))
};

exports.getusercor = async (req, res) => {
  let users, local, role;

  let results = [];
  try {
    local = await Local.findOne({name: req.query.local});
    if (!local) {
      return res.status(404).json({ success: false, error: 'tiene que ingresar un puesto valido' })
    }
    role = await Role.findOne({name: "testigo"});
    users = await User.find({role: role._id, local: local._id}).populate('role').populate('local').populate('table');
    if (!users.length) {   
      return res.status(404).json({ success: false, error: 'no se encontraro usuarios' })
    }
    for (let i = 0; i < users.length; i++) {
      results.push({ nit: users[i].nit ? users[i].nit : "", name: users[i].name, phone: users[i].phone ? users[i].phone : "", username: users[i].username, role: users[i].role.name,  local: users[i].local ? users[i].local.name : "",  table: users[i].table ? users[i].table.number : ""});
    }
    return res.status(200).json({ success: true, data: results});
  } catch (error) {
    return res.status(400).json({ success: false, error: error })
  }
};

exports.getuser = (req, res ) =>{
  User.findOne({username: req.query.username})
  .populate('role')
  .populate('local')
  .populate('table')
  .exec((err, user) => {
    if (!user) {
        return res.status(400).json({ success: false, error: "El usuario " + req.body.username +" no existe, ingresa un usuario valido" });
    }
    const token = jwt.sign({ id: user._id },
          config.secret,
          {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 86400, // 24 hours
          });

    var authorities = "ROLE_" + user.role.name.toUpperCase();

    if(user.role.name === "testigo"){
      res.status(200).send({id: user._id, username: user.username, nit: user.nit, name: user.name, role: authorities, accessToken: token, phone: user.phone, local: user.local.name, table: user.table.number, send: user.send});
    }else if(user.role.name === "coordinador") {
      res.status(200).send({id: user._id, username: user.username, nit: user.nit, name: user.name, role: authorities, accessToken: token, phone: user.phone, local: user.local.name});
    }else{
      res.status(200).send({id: user._id, username: user.username, nit: user.nit, name: user.name, role: authorities, accessToken: token, phone: user.phone});
    }
  });
};

exports.assingSend = (req, res ) =>{
  User.findOne({username: req.body.username},(err, user) => {
    if (!user) {
        return res.status(400).json({ success: false, error: "El usuario " + req.body.username +" no existe, ingresa un usuario valido" });
    }
    console.log(user.username);
    user.send = true;

    user.save(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      console.log(user.send);
      res.send({ message: "El usuario fue actualizado exitosamente!" });

    });
  });
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