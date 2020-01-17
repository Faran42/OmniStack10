const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const port = 3333

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-av1sg.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: false 
})

const app = express();

app.use(cors());
// .use significa dizer que o parâmetro passado sera usado em todas as rotas da aplicação
app.use(express.json());

app.use(routes);

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:

// (GET) Query Params: request.query (Filtros, ordenação, paginação, ...) parametros de busca que são incorporados na url. Acessível através de 
// (PUT or DELETE) Route Params: request.params (Identificar um recurso na alteração ou remoção)
// (POST or PUT) Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional) extremamente performático



app.listen(port, () => {
    console.log(`Listen on ${port} port`)
})