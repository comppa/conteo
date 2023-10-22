const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const upload = require("../middlewares/upload");
const excelController = require("../controllers/excel.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get("/api/testigo", 
      // [authJwt.verifyToken], 
      controller.testigoBoard);

  app.get(
    "/api/candidato",
    // [authJwt.verifyToken, authJwt.isCandidato],
    controller.candidatoBoard
  );

  app.get(
    "/api/admin",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post("/api/uploadusers", [upload.single("file")], excelController.uploadUsers);
};
