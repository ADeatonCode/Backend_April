import { useEffect, useState } from 'react';
import axios from 'axios';

const API= http://localhost:3000
export default function PizzaList() {
    const [pizzas, setPizzas] = useState([]);
    const [newPizza, setNewPizza] = useState({ name: '', toppings: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPizzas() {
            try {
                const response = await axios.get(`${API}/api/pizzas`);
                setPizzas(response.data);
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPizzas();
    }, []);