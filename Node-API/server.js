import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (request, response) => {
    console.log(request.body);

    users.push(request.body);

    response.status(201).json(request.body);
});

// TODO: rota para listar usuários
app.get('/usuarios', (request, response) => {
    response.status(200).json(users);
});
app.listen(3000);