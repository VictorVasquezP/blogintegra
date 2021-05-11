let express = require("express");
let cors = require("cors");
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
let router = require("./routes/route");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.listen(3001);

