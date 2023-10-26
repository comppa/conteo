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
    var locala = [["IE BARRIO PARIS MEGACOLEGIO", 1 ], 
        ["I.E. ALBERTO DIAZ MUÑOZ", 2],
        ["I.E ALB. DIAZ MUÑOZ SECC.PRAD", 3],
        ["CENTRO EDUCAT RAQUEL JARAMILLO", 4],
        ["IE BARRIO PARIS", 5],
        ["I.E. ATANASIO GIRARDOT", 1],
        ["COLEGIO PARROQUIAL SAN FCO DE ASIS", 2],
        ["IE SUAREZ DE LA PRESENTACION", 3],
        ["COLEGIO SAN BUENAVENTURA", 4],
        ["I.E. TOMAS CADAVID RESTREPO", 5],
        ["COLEGIO LA SALLE", 1],
        ["I.E. FERNANDO VELEZ", 2],
        ["I.E. NAZARETH", 3],
        ["I.E CARLOS PEREZ SEDE ROSALIA", 4],
        ["INST. UNIVERSITARIA MARCO FIDEL SUAREZ", 1],
        ["COL JESUS DE LA BUENA ESPERANZ", 2],
        ["IE SAGRADO CORAZON", 3],
        ["IE JORGE ELIECER GAITAN", 1],
        ["I.E. SANTA CATALINA", 2],
        ["I.E. LA MILAGROSA", 3],
        ["I.E. HERNAN VILLA BAENA", 1],
        ["I.E. GILBERTO ECHEVERRI MEJIA", 2],
        ["I.E. CIAL ANTONIO ROLDAN", 3],
        ["IE VILLA DEL SOL SEC", 4],
        ["COLEGIO MANO AMIGA", 5],
        ["IE JOSEFA CAMPOS", 6],
        ["I.E. CONCEJO DE BELLO", 1],
        ["I.E FE Y ALEGRIA NUEVA GENERAC", 2],
        ["COL NUESTRA SEÑORA DE CHIQUINQ", 3],
        ["BETSABE ESPINAL", 4],
        ["I.E FEDERICO SIERRA ARANGO", 1],
        ["I.E. LA GABRIELA", 2],
        ["IE ZAMORA CENTENARIO", 3],
        ["I.E. NAVARRA", 1],
        ["IE NAVARRA SD EL TREBOL", 2],
        ["I.E. LAS VEGAS", 3],
        ["I.E FONTIDUEÑO JAIME ARANGO R", 4],
        ["INSTITUCION EDUCATIVA ANDRES BELLO", 1],
        ["CEDENORTE INSTITUTO TECNOLOGICO", 2],
        ["CARCEL NACIONAL DE BELLAVISTA", 1],
        ["SAN FELIX", 1],
        ["SD JOSE MARIA GRIJELMO FE Y ALEGRIA", 2]];
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
        name: "1"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added candidate 1");
      });

      new Candidate({
        number: 2,
        name: "2"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("addee candidate 2");
      });

      new Candidate({
        number: 3,
        name: "3"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate 3");
      });
      new Candidate({
      number: 4,
      name: "4"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }

      console.log("added candidate 4");
    });
    new Candidate({
      number: 5,
      name: "5"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 5");
    });

    new Candidate({
      number: 6,
      name: "6"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 6");
    });
    new Candidate({
      number: 7,
      name: "7"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 7");
    });
    new Candidate({
      number: 8,
      name: "8"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 8");
    });
    new Candidate({
      number: 9,
      name: "9"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 9");
    });
    new Candidate({
      number: 10,
      name: "10"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 10");
    });
    new Candidate({
      number: 11,
      name: "11"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 11");
    });
    new Candidate({
      number: 12,
      name: "12"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 12");
    });
    new Candidate({
      number: 13,
      name: "13"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 13");
    });
    new Candidate({
      number: 14,
      name: "14"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 14");
    });
    new Candidate({
      number: 15,
      name: "15"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 15");
    });
    new Candidate({
      number: 16,
      name: "16"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 16");
    });
    new Candidate({
      number: 17,
      name: "17"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 17");
    });
    new Candidate({
      number: 18,
      name: "18"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 18");
    });
    new Candidate({
      number: 19,
      name: "19"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate 19");
    });
    new Candidate({
      number: 20,
      name: "VOTO EN BLANCO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto en Blanco");
    });
    new Candidate({
      number: 21,
      name: "VOTO NULO"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto Nulo");
    });
    new Candidate({
      number: 22,
      name: "VOTOS NO MARCADOS"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added candidate Voto en Blanco");
    });
    // };
  });

  setTimeout(function() {
    Table.estimatedDocumentCount((error, count) => {
      // if (!error && count === 0) {
        Local.findOne({name: "IE BARRIO PARIS MEGACOLEGIO" },
        (err, pto) => {
          console.log(pto.name);
          if (err) {
            res.status(500).send({ message: err });
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

        Local.findOne({name: "I.E. ALBERTO DIAZ MUÑOZ" },
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
          }
        });
        Local.findOne({name: "I.E ALB. DIAZ MUÑOZ SECC.PRAD" },
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
          }
        });
        Local.findOne({name: "CENTRO EDUCAT RAQUEL JARAMILLO" },
        (err, pto) => {
          console.log();
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 26; i++) {
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
        Local.findOne({name: "IE BARRIO PARIS" },
        (err, pto) => {
          console.log();
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 14; i++) {
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

        Local.findOne({name: "I.E. ATANASIO GIRARDOT" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 46; i++) {
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
        Local.findOne({name: "COLEGIO PARROQUIAL SAN FCO DE ASIS" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 35; i++) {
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
        Local.findOne({name: "IE SUAREZ DE LA PRESENTACION" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 36; i++) {
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
        Local.findOne({name: "COLEGIO SAN BUENAVENTURA" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 25; i++) {
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
        Local.findOne({name: "I.E. TOMAS CADAVID RESTREPO" },
        (err, pto) => {
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
          };
        });
        Local.findOne({name: "COLEGIO LA SALLE" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: errr });
            return;
          }
          for (let i = 1; i < 45; i++) {
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
        Local.findOne({name: "I.E. FERNANDO VELEZ" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
              for (let i = 1; i < 35; i++) {
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
        Local.findOne({name: "I.E. NAZARETH" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
              for (let i = 1; i < 23; i++) {
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
          Local.findOne({name: "I.E CARLOS PEREZ SEDE ROSALIA" },
          (err, pto) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
                for (let i = 1; i < 18; i++) {
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
            Local.findOne({name: "INST. UNIVERSITARIA MARCO FIDEL SUAREZ" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 33; i++) {
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
            Local.findOne({name: "INST. UNIVERSITARIA MARCO FIDEL SUAREZ" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 23; i++) {
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
            Local.findOne({name: "COL JESUS DE LA BUENA ESPERANZ" },
            (err, pto) => {
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
            
            Local.findOne({name: "IE JORGE ELIECER GAITAN" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 55; i++) {
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
            Local.findOne({name: "I.E. SANTA CATALINA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 25; i++) {
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
            Local.findOne({name: "I.E. LA MILAGROSA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 26; i++) {
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
            Local.findOne({name: "I.E. HERNAN VILLA BAENA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 35; i++) {
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
            Local.findOne({name: "I.E. GILBERTO ECHEVERRI MEJIA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 23; i++) {
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
            Local.findOne({name: "I.E. CIAL ANTONIO ROLDAN" },
            (err, pto) => {
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
            Local.findOne({name: "IE VILLA DEL SOL SEC" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 37; i++) {
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
            Local.findOne({name: "COLEGIO MANO AMIGA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 30; i++) {
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
            Local.findOne({name: "IE JOSEFA CAMPOS" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 25; i++) {
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
            Local.findOne({name: "I.E. CONCEJO DE BELLO" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 30; i++) {
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
            Local.findOne({name: "I.E FE Y ALEGRIA NUEVA GENERAC" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 29; i++) {
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
            Local.findOne({name: "COL NUESTRA SEÑORA DE CHIQUINQ" },
            (err, pto) => {
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
              };
            });
            Local.findOne({name: "BETSABE ESPINAL" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 23; i++) {
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
            Local.findOne({name: "I.E FEDERICO SIERRA ARANGO" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 34; i++) {
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
            Local.findOne({name: "I.E. LA GABRIELA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 25; i++) {
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
            Local.findOne({name: "IE ZAMORA CENTENARIO" },
            (err, pto) => {
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
            Local.findOne({name: "I.E. NAVARRA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 11; i++) {
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
          Local.findOne({name: "IE NAVARRA SD EL TREBOL" },
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
            Local.findOne({name: "I.E. LAS VEGAS" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
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
            Local.findOne({name: "I.E FONTIDUEÑO JAIME ARANGO R" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 25; i++) {
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
            Local.findOne({name: "INSTITUCION EDUCATIVA ANDRES BELLO"},
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 26; i++) {
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
            Local.findOne({name: "CEDENORTE INSTITUTO TECNOLOGICO"},
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 29; i++) {
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
            Local.findOne({name: "CARCEL NACIONAL DE BELLAVISTA"},
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
            Local.findOne({name:"SAN FELIX"},
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
            });Local.findOne({name: "SD JOSE MARIA GRIJELMO FE Y ALEGRIA"},
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 6; i++) {
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
