'use strict';

// var createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
// const PORT = process.env.PORT || 5000
// settings
// app.set('port', (process.env.PORT || 5000));

app.set("view engine", "ejs");
//routes
var routes = require("./routes");
// static files
app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "views"));
app.get("/", routes);

// Body Parcer
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// Logger middleware
const logger = require('morgan');
app.use(logger('dev'));


app.listen(process.env.PORT || 3003);
// app.listen(PORT, () => console.log(`Listening on ${ PORT }`))