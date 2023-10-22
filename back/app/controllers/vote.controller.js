const db = require("../models");
const Vote = db.vote;
const Table = db.table;
const Candidate = db.candidate;
const Local = db.local;


addvote = async (req, res, next) => {
    const body = req.body;
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
                    console.log( req.body.votes[i].name);
                     Candidate.findOne({name: body.votes[i].name },
                      (err, candidate) => {
                        if (!candidate) {
                          res.status(500).send({ message: "Debe de proporcionar un candidato" });
                          return;
                        }

                         const vote = new Vote({
                          cant: req.body.votes[i].cant,
                          candidate: candidate._id,
                          table: table._id
                         });

                        // console.log(table._id);

                         vote.save(err => {
                          if (err) {
                            res.status(500).send({ message: err });
                            return;
                          }
                          });
                        console.log("los votos se han asignado a la mesa", table.number, pto.name);

                        }); 
                  }
                  Vote.find({table: table._id}).select({ "_id": 1, "candidate": 0, "table": 0, "cant": 0,  "createdAt": 0, "updatedAt": 0 }).exec()
                  res.send({ success: true,  message: "Los votos ha sido guardado con exito!" });
            });
          }); 
        }
    });
};

updatevotes = async (req, res)=>{
  console.log(req.body);
  let votes = [];
  let vote, table, local;
  if (req.body.observations) {
    local = await Local.findOne({name: req.body.local});
    table = await Table.findOne({number: req.body.table, local: local._id});
    if (req.body.ischecked) {
      table.rconts = true;
    }
    table.observations.push(req.body.observations);
    table.tvotes = req.body.total;
    table.save(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
  }else{
    res.status(500).send({ success: false, message: "El campo observaciones es obligatorio, llenelo y explique el porque se modifico" });
  }

  if (req.body.votes) {
    votes = req.body.votes;
    for (let i = 0; i < votes.length; i++) {
      vote = await Vote.findById(votes[i].id);
      vote.cant = votes[i].cant;
      vote.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    }
    res.send({ success: true,  message: "Los votos han actualizado con exito!" });
  }else{
    res.status(500).send({ success: false, message: "Se deben de agregar votos y cantidades para actualizarlos!" });
  }
};

getvotesT = async (req, res) =>{
  let locals, table, t, votes, vote;
  let results = [];
  
  try {
    locals = await Local.find({}); // Assign the result inside the promise
      for (let i = 0; i < locals.length; i++) {
        table = await Table.find({ local: locals[i]._id});
        t = [];
        for (let j = 0; j < table.length; j++) {
          vote = [];
          votes = await Vote.find({ table: table[j]._id}).populate('candidate');
            for (let k = 0; k < votes.length; k++) {
               vote.push({"candidate": votes[k].candidate.name, "cant": votes[k].cant})
            }
          t.push({"number": table[j].number, "votes": vote});
        }
        results.push({"local": locals[i].name, "tables": t});// Assign the result ins// Assign the result inside the promiseide the promise
      }
      res.status(200).json({ success: true, data: results});
    } catch (error) {
      res.status(500).json({ error: 'Internal server error'});
    }
};

getvotes = async (req, res) => {

  let local, table, votes;
  let results = [];
  try{
    local = await Local.findOne({name: req.query.local});
    table = await Table.findOne({local: local._id, number: req.query.number});
    votes = await Vote.find({table: table._id}).populate('candidate');
    if (votes.length) {
      for (let i = 0; i < votes.length; i++) {
        results.push({id: votes[i]._id, cant: votes[i].cant, candidate: votes[i].candidate.name});
      }
      return res.status(200).json({ success: true, data: results});
    }else{
      return res.status(404).json({ success: false, error: 'votes not found' })
    }
  }catch (error) {
    res.status(500).json({ error: 'Internal server error'});
  }

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

getvotesCT = (req, res) => {

    Candidate.find({},(err, candidates) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!candidates.length) {   
            return res
                .status(404)
                .json({ success: false, error: 'candidate not found' })
          }
        for (let i = 0; i < candidates.length; i++) {
           Vote.find({
                 candidate: candidates[i]._id
            },(err, votes) => {
                if (!votes) {
                    return res.status(400).json({ success: false, error: "Ingrese el candidato para contar los votos de votación" })
                }

                if (!votes.length) {   
                  return res.status(404).json({ success: false, error: 'votes not found' })
                }
                var total = 0;
                for (let i = 0; i < votes.length; i++) {
                  total += votes[i].cant;
                }
                candidates[i].total = total;
                candidates[i].save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }
                  });
                // console.log(candidates[i]);
            // return res.status(200).json({ success: true, data: total})
            });
         }  
      return res.status(200).json({ success: true, data: candidates})
      }).sort({ number: 1}).clone().catch(err => console.log(err))
};

module.exports ={
  addvote,
  updatevotes,
  getvotesC,
  getvotesT, 
  getvotesCT,
  getvotes
}