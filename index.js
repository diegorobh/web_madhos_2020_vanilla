const express = require("express");
const app = express();
const apiRoute = require("./routes/api");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true   //to use extended objects
}));
app.use("/api",  apiRoute);

app.listen("3000");
