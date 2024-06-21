const mongoose = require("mongoose");
/*const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../envirome/devEnvirome.env"),
});*/

const dbmonto_host = process.env.DB_MONGO_HOST;
const dbmongo_db = process.env.DB_DATABASE;

// const MONGODB_URL = `mongodb://${dbmonto_host}/${dbmongo_db}`;

const MONGODB_URL = process.env.DB_MONGO_URI;

//Para conectarse a la BD directo desde la pc:
//const MONGODB_URL =mongodb://u2k8ef3ckedfaatzdma2:prQrIX2g80mE5bt8Q9P@byxiysb1akegfyyuapsb-mongodb.services.clever-cloud.com:2674/byxiysb1akegfyyuapsb

mongoose
  .connect(MONGODB_URL, {})
  .then((bd) => console.log("Conexión exitosa a la BD de Mongoose"))
  .catch((err) => console.log("Error de Conexión db de Mongo en el archivo configMongoDB ", err));
