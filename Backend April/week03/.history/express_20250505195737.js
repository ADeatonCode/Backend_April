import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());

let pizzas = [
    { id: uuid(), name: 'Margherita', toppings: ['mozzarella','basil'] }
];

app.get('/api/pizzas', (req, res) => {res.json(pizzas);

app.post('/api/pizzas', (req, res) => {
    const pizza = {id: uuid(), ...req.body};
    pizzas.push(pizza);
    res.status(201).json(pizza);
});


app.delete('/api/pizzas/:id', (req, res) => {
    pizzas = pizzas.filter(pizza => pizza.id !== req.params.id);
    res.status(204).end();
});  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

