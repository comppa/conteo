const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const db = require("./app/models");
const fs = require('fs');
const https = require('https');
const dbConfig = require("./app/config/db.config");
// const seed = require("./app/seeds/seed");

const Role = db.role;
const Table = db.table;
const Candidate = db.candidate;
const Local = db.local;


var corsOptions = {
  origin: "https://barbosa.jpweb.com.co"
};


global.__basedir = __dirname ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// const httpsServer = https.createServer({
//   key: fs.readFileSync('./cert/privkey.pem'),
//   cert: fs.readFileSync('./cert/fullchain.pem'),
// },app);

db.mongoose.set('strictQuery', false);
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.use(cors());
  // parse requests of content-type - application/json
  app.use(express.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));
 
  //Aca se colocan las rutas
  app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a mi apliacion para conteo de votos a traves de los formularios." });
  });


  function initial() {
   
  
  }

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/vote.routes')(app);
require('./app/routes/candidate.routes')(app);
require('./app/routes/table.routes')(app);



// puerto
const PORT = process.env.PORT || 8080;
// httpsServer.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 
