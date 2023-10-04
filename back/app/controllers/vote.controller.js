const db = require("../models");
const Vote = db.vote;
const Table = db.table;
const Candidate = db.candidate;
const Local = db.local;


addvote = async (req, res, next) => {
    const body = req.body;
    console.log(req.body.votes);
    if (!body) {
        return res.status(400).json({
            success: false, 
            error: 'Tienes que proporcionar un voto',
        })
    }
    // console.log(body.length);
    // if (body.length != 3) {
    //   return res.status(400).json({
    //     success: false, 
    //     error: 'Tienes que proporcionar un voto, una zona y una mesa',
    //   })
    // }

   Candidate.find({},(err, candidates) => {
        if (!candidates) {
            return res.status(400).json({ success: false, error: "debe de proporcionar un candidato" });
        }
        if (!candidates.length) {   
            return res
                .status(404)
                .json({ success: false, error: 'candidates not found' })
        }

        if (candidates.length != body.votes.length) {

          res.status(404).json({ success: false, error: "la cantidad de votos ingresado no corresponde a el numero de candidatos en postulacion, revise los candidatos y los votos y vuelva a enviar el formulario" })
          return;
        }else{

           Local.findOne({name: body.local },
            (err, pto) => {
              if (!pto) {
                res.status(500).send({  success: false, message: "Ingrese un puesto de votación valido" });
                return;
              }
              
               Table.findOne({
                    number: body.table,
                    local: pto._id
              },(err, table) => {
                  if (!table) {
                      return res.status(400).json({ success: false, error: "ingrese un numero de mesa de votacion" })
                  }

                  for (let i = 0; i < body.votes.length; i++) {
                    
                     Candidate.findOne({name: body.votes[i][0] },
                      (err, candidate) => {
                        if (!candidate) {
                          res.status(500).send({ message: "Debe de proporcionar un candidato" });
                          return;
                        }

                         const vote = new Vote({
                          cant: body.votes[i][1],
                          candidate: candidate._id,
                          table: table._id
                         });

                        console.log(table._id);
                        console.log("los votos se han asignado a la mesa", table.number, table.local);
                         vote.save(err => {
                          if (err) {
                            res.status(500).send({ message: err });
                            return;
                          }
                          });
                          
                        }); 
                  }
                  res.send({ success: true,  message: "Los votos ha sido guardado con exito!" });
                  
            });
          }); 
        }
    });
};

getvotesT = (req, res) =>{

  Local.findOne({name: req.body.local },
    (err, pto) => {
      if (!pto) {
        res.status(500).send({ success: false, message: "Ingrese un puesto de votación valido" });
        return;
      }
      Table.findOne({
            number: req.body.number,
            local: pto._id
      },(err, table) => {
          if (!table) {
              return res.status(400).json({ success: false, error: "Ingrese el puesto de votación" })
          }
          Vote.find({
            table: table._id
          },(err, votes) => {
              if (!votes) {
                  return res.status(400).json({ success: false, error: "Ingrese la  mesa para contar los votos de votación" })
              }

              if (!votes.length) {   
                return res.status(404).json({ success: false, error: 'votes not found' })
            }
          
          res.status(200).json({ success: true, data: votes})
          }).clone().catch(err => console.log(err))
          
      });
    });
};

getvotesC = (req, res) => {
  Candidate.findOne({name: req.body.candidate },
    (err, candidate) => {
      if (!candidate) {
        res.status(500).send({ success: false, message: "Ingrese un candidato valido" });
        return;
      }
      
      Vote.find({
            candidate: candidate._id
      },(err, votes) => {
          if (!votes) {
              return res.status(400).json({ success: false, error: "Ingrese el candidato para contar los votos de votación" })
          }

          if (!votes.length) {   
            return res.status(404).json({ success: false, error: 'votes not found' })
        }
      return res.status(200).json({ success: true, data: votes})
      }).clone().catch(err => console.log(err))
    });
};

module.exports ={
  addvote,
  getvotesC,
  getvotesT
}