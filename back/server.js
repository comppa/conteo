const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");

const dbConfig = require("./app/config/db.config");

const Role = db.role;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// request content type parse - application/json
app.use(express.json());

// express parse - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


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


  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
  
        new Role({
          name: "candidato"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'candidato' to roles collection");
        });
  
        new Role({
          name: "testigo"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'testigo' to roles collection");
        });
      }
    });
  }


//Aca se colocan las rutas
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi apliacion para conteo de votos a traves de los formularios." });
});



// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/form.routes')(app);


// puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
