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
        <>
            <h2>Pizza Menu</h2>
            <input vaule={name} onChange={e => setName(e.target.value)} />
            <button onClick={addPizza}>Add</button>
            <ul>
                {pizzas.map(p => (
                    <li key={p.id}>
                        {p.name}
                        <button onClick={() => deletePizza(p.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
    
