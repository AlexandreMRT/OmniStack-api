const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ho7ye.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros

// Query Params: request.query (Filtros, ordenacao, paginacao)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para ciracao ou alteracao de um registro)

// MongoDB (Nao-Relacional)
app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);