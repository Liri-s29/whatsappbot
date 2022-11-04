require("dotenv").config();
var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var xhub = require("express-x-hub");
require("./config/db_config").connect();

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"));

app.use(xhub({ algorithm: "sha1", secret: process.env.APP_SECRET }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

var received_updates = [];

const FacebookRouter = require("./modules/facebook/route");

app.get("/", function (req, res) {
	console.log(req);
	res.send("<pre>" + JSON.stringify(received_updates, null, 2) + "</pre>");
});

app.use("/facebook", FacebookRouter);

app.listen();
