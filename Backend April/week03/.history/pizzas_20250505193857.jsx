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
        const res = await axios.post('${API}/api/pizzas', { name });
        setPizzas([...pizzas, res.data]);
        setName('');
    }
    
