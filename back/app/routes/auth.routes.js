const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsername,
      verifySignUp.checkRoleExisted,
      verifySignUp.checkIfTable
    ],
    controller.signup
  );

  app.post("/api/auth/signin", [verifySignUp.checkIfSign], controller.signin);
  app.get("/api/users", controller.getusers);
  app.get("/api/auth/logout", controller.logout);
  app.get("/api/usersco", controller.getusercor);
  app.get("/api/auth/user", controller.getuser);
  app.post("/api/assing", controller.assingSend);
  app.post("/api/auth/update",[ verifySignUp.checkRoleExisted], controller.update);

};
