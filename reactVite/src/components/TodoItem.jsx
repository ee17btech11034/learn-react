import React from 'react';
import { useTodo } from '../contexts';

const TodoItem = ({todo}) => {

    const {updateTodo, } = useTodo()
    return (
        <div>
            <input type="text" readOnly/>
            <input type="checkbox" />
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;
