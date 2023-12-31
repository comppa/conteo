const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/vote.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/vote", [authJwt.verifyToken, verifySignUp.checkIfSend], controller.addvote);
  app.get("/api/get-table-votes", controller.getvotesT);
  app.put("/api/editvotes", controller.updatevotes);
  app.get("/api/votes", controller.getvotes);
  app.get("/api/get-votes", controller.getvotesCT);
  app.get("/api/get-candidate-votes", controller.getvotesC);
};