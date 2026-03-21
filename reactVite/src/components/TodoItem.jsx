import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice';


const TodoItem = () => {
    const todos = useSelector(state => state.todos) // yaha selector ko call krte hai wo store/state provide kr deta hai
    // we stored the todos in todos
    const dispatch = useDispatch()
    return (
        <div>
            {todos.map(todo => {
                <li key={todo.id}> {todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>Edit</button>
                </li>
            })}
        </div>
    );
}

export default TodoItem;
