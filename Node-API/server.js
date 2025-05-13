import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (request, response) => {
    console.log(request.body);
    users.push(request.body);
    response.send('Ok, post!');
});

// TODO: rota para listar usuários
app.get('/usuarios', (request, response) => {
    response.json(users);
});
app.listen(3000);