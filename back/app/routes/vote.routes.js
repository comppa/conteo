const { verifyEnt, authJwt } = require("../middlewares");
const controller = require("../controllers/vote.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/vote", controller.addvote);
  app.get("/api/get-table-votes", controller.getvotesT);
  app.get("/api/get-candidate-votes", controller.getvotesC);
};