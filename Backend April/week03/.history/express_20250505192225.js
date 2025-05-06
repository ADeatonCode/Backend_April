import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());

let pizzas = [
    { id: uuid(), name: 'Margherita', toppings: ['mozzarella','basil'] 
     }
];

app.get('/api/pizzas', (req, res) => {res.json(pizzas));

app.post('/api/pizzas', (req, res) => {
    const pizza =