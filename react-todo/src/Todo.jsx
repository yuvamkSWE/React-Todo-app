import { useState } from "react";
import Button from './Button.jsx';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleInputChange (event){
        setNewTodo(event.target.value);
    }

    function addTodo(){
        if(newTodo.trim() !== ""){
            setTodos( t => [...t, newTodo]);
            setNewTodo("");
        }
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTodo = [...todos];
            const task = updatedTodo.splice(index, 1);
            updatedTodo.splice(index - 1, 0, task[0]);
            setTodos(updatedTodo);

        }
    }

    function moveTaskDown(index){

        if(index < todos.length - 1){
            const updatedTodo = [...todos];
            const task = updatedTodo.splice(index, 1);
            updatedTodo.splice(index + 1, 0, task[0]);
            setTodos(updatedTodo);
        }
    }

    function deleteTodo(index){
        const updatedTodo = todos.filter((element , i) => i !== index);
           setTodos(updatedTodo);
    }

    return (
        <>
            <input 
                type="text" 
                value={newTodo} 
                onChange={handleInputChange}
                placeholder="Todo" 
            />
            <Button content='Add' onClick={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo} </span>
                        <Button content='Delete' onClick={() => deleteTodo(index)} />
                        <Button content='Up' onClick={() => moveTaskUp(index)} />
                        <Button content='Down' onClick={() => moveTaskDown(index)} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
