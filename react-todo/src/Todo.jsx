import { useState } from "react";
import Button from './Button.jsx';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

 

    return (
        <>
            <input 
                type="text" 
                value={newTodo} 
                
                placeholder="Todo" 
            />
            <Button content='Add' />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <Button content='Delete' />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
