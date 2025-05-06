import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());

let pizzas = [
    { id: uuid(), name: 'Margherita', toppings: [mozzarella, tomato] },
]