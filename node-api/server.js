const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const requireDir = require('require-dir');

require('./src/database');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
// mongoose.connect(
//     'mongodb://localhost:27017/nodeapi', 
//     { useNewUrlParser: true }
// );
requireDir('./src/models');

//Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);