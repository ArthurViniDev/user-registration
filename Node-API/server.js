import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', async (request, response) => {
    console.log(request.body);

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age,
        }
    });
    response.status(201).json(request.body);
});

app.get('/usuarios', (request, response) => {
    response.status(200).json(users);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});