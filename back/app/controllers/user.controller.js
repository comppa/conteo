  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content");
  };
  
  exports.testigoBoard = (req, res) => {
    res.status(200).send("Testigo Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.candidatoBoard = (req, res) => {
    res.status(200).send("Candidato Content.");
  };