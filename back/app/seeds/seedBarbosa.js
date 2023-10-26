const db = require("../models");
const dbConfig = require("../config/db.config");

const Role = db.role;
const Table = db.table;
const Candidate = db.candidate;
const Local = db.local;
const User = db.user;


initial = (req, res, next) => {
     
  Role.estimatedDocumentCount((error, count) => {
    // console.log(count);
    if (!error && count === 0) {
    const rolea = ["admin", "candidato", "testigo", "coordinador"];
    for (let i = 0; i < rolea.length; i++) {
      new Role({
        name: rolea[i]
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added "+ rolea[i] +" to roles collection");
      });
     };
    };
  });


  Local.estimatedDocumentCount((error, count) => {
    if (!error && count === 0) {
    var locala = [["PBRO. LUIS EDUARDO PEREZ MOLIN", 1],
    ["INST. EDUC. MANUEL JOSE CAICED", 2],
    ["IE LUIS EDUARDO ARIAS", 3],
    ["CENTRO DE EDUCACION SUPERIOR", 1],
    ["COL. COOPERATIVO SIMÓN BOLIVAR", 2],
    ["C.A.S DIEGO FERNANDEZ BARBOSA", 3],
    ["UNIDAD DEPORTIVA LOS BUCAROS", 4],
    ["CARCEL", 1],
    ["EL HATILLO", 1]];
      for (let i = 0; i < locala.length; i++) {
        new Local({
          number: locala[i][1],
          name:  locala[i][0]
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added local " + locala[i]);
        });
      };
    }
  });
  
  Candidate.estimatedDocumentCount((error, count) => {
    if (!error && count === 0) {
      new Candidate({
        number: 1,
        name: "ALINA MARCELA RESTREPO RODRIGUEZ"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added candidate ALINA");
      });

      new Candidate({
        number: 2,
        name: "FREDY ALBERTO CORREA CARDONA"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("addee candidate FREDY");
      });

      new Candidate({
        number: 3,
        name: "VICTOR ANTONIO GRACIANO RAMIREZ"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate VICTOR");
      });
      new Candidate({
        number: 4,
        name: "LUIS JAVIER FRANCO AGUDELO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate LUIS");
      });
      new Candidate({
      number: 5,
      name: "JUAN DAVID ROJAS AGUDELO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }

      console.log("added candidate JUAN");
    });
    new Candidate({
      number: 6,
      name: "JAIME LEON VANEGAS VELEZ"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate JAIME");
    });
    new Candidate({
      number: 7,
      name: "JUAN CAMILO TOBON OLARTE"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate JUAN");
    });
    new Candidate({
      number: 8,
      name: "VOTO EN BLANCO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto en Blanco");
    });
    new Candidate({
      number: 9,
      name: "VOTO NULO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto Nulo");
    });
    new Candidate({
      number: 10,
      name: "VOTOS NO MARCADOS"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto en Blanco");
    });
    };
  });

  setTimeout(function() {
    Table.estimatedDocumentCount((error, count) => {
      if (!error && count === 0) {
        Local.findOne({name: "PBRO. LUIS EDUARDO PEREZ MOLIN"},
        (err, pto) => {
          console.log(pto.name);
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 21; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false
            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          };
        });

        Local.findOne({name: "INST. EDUC. MANUEL JOSE CAICED" },
        (err, pto) => {
          console.log(pto.name);

          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 27; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false
            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          }
        });
        Local.findOne({name: "IE LUIS EDUARDO ARIAS" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 24; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false
            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          }
        });
        Local.findOne({name: "CENTRO DE EDUCACION SUPERIOR"},
        (err, pto) => {
          console.log();
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 12; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false

            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          };
        });
        

        Local.findOne({name: "COL. COOPERATIVO SIMÓN BOLIVAR" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 10; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false

            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          };
        });
        Local.findOne({name: "C.A.S DIEGO FERNANDEZ BARBOSA" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 8; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false

            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          };
        });
        Local.findOne({name: "UNIDAD DEPORTIVA LOS BUCAROS" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 28; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false

            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + i + " " + pto.name );
            });
          };
        });
        Local.findOne({name: "CARCEL" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
            new Table({
              number: 1,
              local: pto._id,
              scrutinized: false

            }).save(err => {
              if (err) {
                console.log("error", err);
              }
      
              console.log("added table " + 1 + " " + pto.name );
            });
          
        });
        Local.findOne({name: "EL HATILLO" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: errr });
            return;
          }
          for (let i = 1; i < 17; i++) {
            new Table({
              number: i,
              local: pto._id,
              scrutinized: false

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

module.exports = {initial}
