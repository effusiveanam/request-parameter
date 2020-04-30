const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//var mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const app = express();

/*var Task = require('./api/models/todoListModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});*/


/*
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route*/

/*app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.get("/url", (req, res, next) => {
 res.json(["state parameter", "account number"]);
});*/

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../dist`));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

/*var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080*/
