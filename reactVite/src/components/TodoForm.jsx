import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

const TodoForm = () => {
    const [newTodoTitle, setNewTodoTitle] = useState("");

    // add new todo
    const { addTodo } = useTodo();

    const handleclick = (e) => {
        e.preventDefault();

        if (!newTodoTitle) return;

        // addTodo({id: Date.now(), todo: newTodoTitle, iscomplete: false}) // this we need to give but as these can be added in function as well so we will remove common part
        // but addtodo me to hamne sft content pass kiya hai to ham sirf content denge
        addTodo(newTodoTitle);

        setNewTodoTitle('') // reset this as item is added and we need to clean this state for this form
    }
    return (
        <div>
            <input type="text" value = {newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)}/>
            <button type="button" onClick={handleclick}>Add todo</button>
        </div>
    );
}

export default TodoForm;
