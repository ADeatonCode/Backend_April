import { useEffect, useState } from 'react';
import axios from 'axios';

const API= http://localhost:3000
export default function PizzaList() {
    const [pizzas, setPizzas] = useState([]);
    const [name, setName] = useState('');
    
    // READ

    useEffect(() => {
        axios.get('${API}/api/pizzas')
            .then(res => setPizzas(res.data));  
    }, []);

    // CREATE
    const addPizza = async () => {
        const res = await axios.post('${API}/api/pizzas', { name, toppings: [] });
        setPizzas([...pizzas, res.data]);
        setName('');
    };

    // DELETE
    
    const deletePizza = async id => {
        await axios.delete('${API}/api/pizzas/${id}');
        setPizzas(pizzas.filter(p => p.id !== id));
    };

    return (
        
    
