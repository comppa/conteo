const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// request content type parse - application/json
app.use(express.json());

// express parse - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// aca se colocan las rutas
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi apliaccion para conteo de votos a traves de los formularios." });
});

// puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
