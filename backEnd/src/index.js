const express = require('express');
const conection = require('./db/conection');
const routes = require('./routes');
const app = express();
conection.connectDb();
app.use(express.json());
app.use(routes);
app.listen(8080);
