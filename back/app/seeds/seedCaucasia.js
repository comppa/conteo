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
    var locala = [["INSTITUCION EDUCATIVA SANTO DOMINGO", 1],
      ["IE SANTO DOMINGO NUEVA SANTA H", 2],
      ["I.E. LICEO CAUCASIA STA HELENA", 3],
      ["INSTITUCION EDUCATIVA LICEO CAUCASIA", 4],
      ["INSTITUCION EDUCATIVA LICEO CONCEJO MPAL", 5],
      ["I.E. STA TERESITA LOMA FRESCA", 6], 
      ["I.E. STA TERESITA CENTRO", 7],
      ["I.E.ANTIOQUIA LA GRANDE", 8],
      ["I.E. LA MISERICORDIA SN RAFAEL", 1],
      ["COL MIL EL TESORO DEL SABER", 2],
      ["I.E. LA MISERICORDIA PPAL", 3],
      ["INST.EDUC.MARCO FIDEL SUAREZ", 4],
      ["I.E. DIVINO NIÑO PRINCIPAL", 5],
      ["I.E. DIVINO NIÑO SEC CARACOLI", 6],
      ["I.E. DIVINO NIÑO sede SAN JOSE", 7],
      ["INSTITUCION EDUCATIVA LAS MALVINAS", 8],
      ["CARCEL", 1],
      ["CUTURU", 5],
      ["EL PANDO", 6],
      ["LA ILUSION", 10],
      ["MARGENTO", 17],
      ["PALANCA", 25],
      ["PUERTO COLOMBIA", 27],
      ["PALOMAR", 28],
      ["PUERTO GLORIA", 40],
      ["PUERTO TRIANA", 60],
      ["SANTA ROSITA", 70],
    ];
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
        name: "ANTONIO JOSE PEREZ ARAUJO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added candidate ANTONIO");
      });
      new Candidate({
        number: 2,
        name: "JAIME ALFONSO MONTOYA ORTEGA"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("addee candidate JAIME");
      });
      new Candidate({
        number: 3,
        name: "DAGOBERTO LOPEZ LAZA"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate DAGOBERTO");
      });
      new Candidate({
      number: 4,
      name: "DAVID ENRIQUE ARANGO QUINTANA"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added candidate DAVID");
      });
      new Candidate({
        number: 5,
        name: "FABIO ENRIQUE MONTES ROJAS"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate FABIO");
      });
      new Candidate({
        number: 7,
        name: "EDWIN JAIR AREIZA ROMAN"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate EDWIN");
      });
      new Candidate({
        number: 8,
        name: "BENITO ANTONIO PACHECO JULIO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidato BENITO");
      });
      new Candidate({
        number: 9,
        name: "ANUAR JOSE BERTEL ALVAREZ"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate ANUAR");
      });
      new Candidate({
        number: 10,
        name: "JHOAN ODERIS MONTES CORTES"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate JHOAN");
      });
      new Candidate({
        number: 11,
        name: "SURANY ARBOLEDA ARIAS"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate SURANY");
      });
      new Candidate({
        number: 12,
        name: "NEDIS MARIA CUADRO SIBAJA"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate NEDIS");
      });
      new Candidate({
        number: 13,
        name: "VOTO EN BLANCO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate VOTO EN BLANCO");
      });
      new Candidate({
        number: 14,
        name: "VOTO NULO"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate VOTO NULO");
      });
      new Candidate({
        number: 15,
        name: "VOTOS NO MARCADOS"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added candidate VOTOS NO MARCADOS");
      });
    };
  });

  setTimeout(function() {
    Table.estimatedDocumentCount((error, count) => {
      if (!error && count === 0) {
        Local.findOne({name: "INSTITUCION EDUCATIVA SANTO DOMINGO" },
        (err, pto) => {
          console.log(pto.name);
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

        Local.findOne({name: "IE SANTO DOMINGO NUEVA SANTA H" },
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
        Local.findOne({name: "I.E. LICEO CAUCASIA STA HELENA" },
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
          }
        });
        Local.findOne({name: "INSTITUCION EDUCATIVA LICEO CAUCASIA" },
        (err, pto) => {
          console.log();
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
        Local.findOne({name: "INSTITUCION EDUCATIVA LICEO CONCEJO MPAL" },
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
        Local.findOne({name: "I.E. STA TERESITA LOMA FRESCA" },
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
        Local.findOne({name: "I.E. STA TERESITA CENTRO" },
        (err, pto) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 1; i < 19; i++) {
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
        Local.findOne({name: "I.E.ANTIOQUIA LA GRANDE" },
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
        Local.findOne({name: "I.E. LA MISERICORDIA SN RAFAEL" },
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

          Local.findOne({name: "COL MIL EL TESORO DEL SABER" },
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
          Local.findOne({name: "I.E. LA MISERICORDIA PPAL" },
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
            Local.findOne({name: "INST.EDUC.MARCO FIDEL SUAREZ" },
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
            Local.findOne({name: "I.E. DIVINO NIÑO PRINCIPAL" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
                  for (let i = 1; i < 22; i++) {
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
              Local.findOne({name: "I.E. DIVINO NIÑO SEC CARACOLI" },
              (err, pto) => {
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
              Local.findOne({name: "I.E. DIVINO NIÑO sede SAN JOSE" },
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
              Local.findOne({name: "INSTITUCION EDUCATIVA LAS MALVINAS" },
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
            Local.findOne({name: "CUTURU" },
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
            Local.findOne({name: "EL PANDO" },
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
            Local.findOne({name: "LA ILUSION" },
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
            Local.findOne({name: "MARGENTO" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 4; i++) {
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
            Local.findOne({name: "PALANCA" },
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
            Local.findOne({name: "PUERTO COLOMBIA" },
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
          Local.findOne({name: "PALOMAR" },
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
            Local.findOne({name: "PUERTO GLORIA" },
            (err, pto) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              for (let i = 1; i < 4; i++) {
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
            Local.findOne({name: "PUERTO TRIANA" },
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
           Local.findOne({name: "SANTA ROSITA" },
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
      };
    }); 
  }, 10000);  
  
 }

module.exports = {initial}
