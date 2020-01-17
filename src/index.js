const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ho7ye.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros

// Query Params: request.query (Filtros, ordenacao, paginacao)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para ciracao ou alteracao de um registro)

// MongoDB (Nao-Relacional)



app.listen(3333);