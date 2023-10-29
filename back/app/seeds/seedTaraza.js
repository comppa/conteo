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
    // if (!error && count === 0) {
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
    // };
  });

  Local.estimatedDocumentCount((error, count) => {
    // if (!error && count === 0) {
    var locala = [["I.E. ANTONIO ROLDAN BETANCUR", 1],
      ["PARQUE EDUCATIVO JESUS ARCANGEL RAMIREZ", 2],
      ["COLEGIO SEDE ANGEL AMABLE ARROYAVE", 1],
      ["INSTITUCION EDUCATIVA RAFAEL NUÑEZ", 2],
      ["CÁRCEL MUNICIPAL", 1],
      ["BARRO BLANCO", 10], 
      ["EL DOCE", 20],
      ["LA CAUCANA", 30],
      ["GUAIMARO SAN MIGUEL", 35],
      ["PUERTO ANTIOQUIA", 60]];
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
    // }
  });
  
  Candidate.estimatedDocumentCount((error, count) => {
    // if (!error && count === 0) {
      new Candidate({
        number: 1,
        name: "RUBEN VALDO CANO AGUDELO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added candidate ruben");
      });

      new Candidate({
        number: 2,
        name: "JESUS ANIBAL YEPES BARRIENTOS"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("addee candidate yepes");
      });

      new Candidate({
        number: 3,
        name: "DAWINSON GOMEZ TAMAYO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate dawinson");
      });
      new Candidate({
      number: 4,
      name: "YOMER FABIAN ALVAREZ CORREA"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }

      console.log("added candidate yomer");
    });
    new Candidate({
      number: 5,
      name: "FRANCISCO JAVIER VASQUEZ RENGIFO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate francisco");
    });
    new Candidate({
      number: 6,
      name: "VOTO EN BLANCO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto en Blanco");
    });
    new Candidate({
      number: 8,
      name: "VOTO NULO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto Nulo");
    });
    new Candidate({
      number: 9,
      name: "VOTOS NO MARCADOS"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate VOTOS NO MARCADOS");
    });
    // };
  });

  setTimeout(function() {
    Table.estimatedDocumentCount((error, count) => {
      // if (!error && count === 0) {
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
              scrutinized: false
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
              scrutinized: false
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
              scrutinized: false
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
          for (let i = 1; i < 15; i++) {
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
        Local.findOne({name: "CÁRCEL MUNICIPAL" },
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
              scrutinized: false

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
              scrutinized: false

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
              scrutinized: false

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
              scrutinized: false

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
                  scrutinized: false

                }).save(err => {
                  if (err) {
                    console.log("error", err);
                  }
          
                  console.log("added table " + i + " " + pto.name );
                });
              };
            });
      // };
    }); 
  }, 10000);  
  
 }

module.exports = {initial}
