import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello"}]
}

const deleteTodo = (state, action) =>{
    state.todos = state.todos.filter((todo) => todo.id !== action.payload.id) // action.payload.id or action.payload both are fine as it can match key name within payload
}
export const todoSlice = createSlice({
    name: "todo", // we have to give this a proper name so that we can identify this in dev tools
    initialState,
    reducers: { // reducer is an Object which contain property and methods
        addTodo: (state, action)={
            const todo = {
                id: nanoid(), 
                text: action.payload.text}
            state.todos.push(todo)
        },
        removeTodo: deleteTodo,
    }
})


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer // it provides list of all reducers defined here
/*
addTodo: (state, action)={}:

    -- addTodo ==> it is the property
    -- (state, action)={} is the function and we get access of 2 things state, action
        -- state --> gives access to current state or val
        -- action --> it provide the actions which were performed like if clicked on "remove" action will have "id"
                -- if action is updateTodo -->action will have id and content 



*/