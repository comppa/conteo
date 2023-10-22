const controller = require("../controllers/table.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/tables", controller.getTables);
  app.get("/api/table", controller.gettable); 
  app.get("/api/getscrutinizedtables", controller.getScrutinizedtables); 
  app.get("/api/getnoscrutinizedtables", controller.getNoScrutinizedtables); 
  app.get("/api/getPie", controller.getPieScrutinized); 
  app.post("/api/addescruter", controller.addEscruter); 
  app.post("/api/update/table", controller.updatetable);
  app.get("/api/locals", controller.getLocals);
  app.get("/api/getbyuser", controller.getTableByUserId);
};