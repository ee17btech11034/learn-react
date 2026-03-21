import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../Features/todo/todoSlice'
// add hota hai "dispatch" se
const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        e.preventDefault();
        //dispatch reducer ko use krte huye Store me changes krta hai
        dispatch(addTodo(input))
        setInput("")
    }
    return (
        <div>
            <h1>Form for add </h1>
        </div>
    );
}

export default AddTodo;
