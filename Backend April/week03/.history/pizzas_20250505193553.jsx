import { useEffect, useState } from 'react';
import axios from 'axios';

const API= http://localhost:3000
export default function PizzaList() {
    const [pizzas, setPizzas] = useState([]);
    const [name, setName] = useState('');
    
    // READ

    useEffect(() => {
        axios.get('${API}/api/pizzas')
            .then(res => setPizzas(response.data))
            .catch(error => console.error('Error fetching pizzas:', error));  

    }) 