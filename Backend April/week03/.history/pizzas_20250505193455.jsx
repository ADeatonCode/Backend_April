import { useEffect, useState } from 'react';
import axios from 'axios';

const API= http://localhost:3000
export default function PizzaList() {
    const [pizzas, setPizzas] = useState([]);
    const [name, setName] = useState('');
    
    // READ

    useEffect(() => {
        axios.get('${API')
    })