
let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
let router = express.Router();
let bodyParser = require('body-parser');
let cors = require("cors");
const config = require("./config.js").get(process.env.NODE_ENV);

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.db_uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("No se pudo conectar a la base de datos: ", err);
    } else {
        console.log("Conectado a la base de datos: " + config.db_database);
    }
});

//cors
app.use(cors({ origin: "https://prae2303.herokuapp.com" }));

// Body parser
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.static(__dirname+'/dist'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
  });
//Routers
let noAuth = require("./Routers/noAuth")(router);
app.use("/", noAuth);

let web = require("./Routers/web")(router);
app.use("/", web);

app.listen(port, () => {
    console.log("Escuchando por el puerto " + port);
});
