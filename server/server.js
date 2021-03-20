const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
//parsear peticiones de content-type a application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//route simple
require("./controllers/controller")(app);
//asignar el puerto para escuchar solicitures
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${PORT}`);
});


