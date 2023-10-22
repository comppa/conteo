const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const db = require("./app/models");


const dbConfig = require("./app/config/db.config");
// const seed = require("./app/seeds/seed");

const Role = db.role;
const Table = db.table;
const Candidate = db.candidate;
const Local = db.local;


var corsOptions = {
  origin: "http://localhost:3000"
};


global.__basedir = __dirname ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

db.mongoose.set('strictQuery', false);

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.use(cors());
  // parse requests of content-type - application/json
  app.use(express.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));
  //Aca se colocan las rutas
  app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a mi apliacion para conteo de votos a traves de los formularios." });
  });


  function initial() {
    setTimeout(function() {
      Table.estimatedDocumentCount((error, count) => {
        if (!error && count === 0) {
          Local.findOne({name: "I.E. ANTONIO ROLDAN BETANCUR" },
          (err, pto) => {
            console.log(pto.name);
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 15; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
  
          Local.findOne({name: "PARQUE EDUCATIVO JESUS ARCANGEL RAMIREZ" },
          (err, pto) => {
            console.log(pto.name);
  
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 15; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            }
          });
          Local.findOne({name: "COLEGIO SEDE ANGEL AMABLE ARROYAVE" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 16; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            }
          });
          Local.findOne({name: "INSTITUCION EDUCATIVA RAFAEL NUÑEZ" },
          (err, pto) => {
            console.log();
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 16; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
          Local.findOne({name: "CÁRCEL MUNICIPAL" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
              new Table({
                number: 1,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + 1 + " " + pto.name );
              });
            
          });
  
          Local.findOne({name: "BARRO BLANCO" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 5; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
          Local.findOne({name: "EL DOCE" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 7; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
          Local.findOne({name: "LA CAUCANA" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            for (let i = 1; i < 9; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
          Local.findOne({name: "GUAIMARO SAN MIGUEL" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: errr });
              return;
            }
            for (let i = 1; i < 3; i++) {
              new Table({
                number: i,
                local: pto._id,
                votes: []
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added table " + i + " " + pto.name );
              });
            };
          });
          Local.findOne({name: "PUERTO ANTIOQUIA" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
                for (let i = 1; i < 3; i++) {
                  new Table({
                    number: i,
                    local: pto._id,
                    votes: []
                  }).save(err => {
                    if (err) {
                      console.log("error", err);
                    }
            
                    console.log("added table " + i + " " + pto.name );
                  });
                };
              });
        };
      }); 
    }, 10000);  
  }

  


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/vote.routes')(app);
require('./app/routes/candidate.routes')(app);
require('./app/routes/table.routes')(app);



// puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
