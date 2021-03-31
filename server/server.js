let express = require("express");
let cors = require("cors");
let app = express();

let router = require("./routes/route");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.listen(3001);

