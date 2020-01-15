const express = require('express');

const app = express();

app.use(express.json());

// metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros

// Query Params: request.query (Filtros, ordenacao, paginacao)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para ciracao ou alteracao de um registro)

app.post('/users/:id', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);