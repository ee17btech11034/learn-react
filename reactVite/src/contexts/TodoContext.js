import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todotitle: "title",
            iscomplete: false
        }
    ],
    addTodo: (todo) =>{}, // a function which will add todo in todos array
    updateTodo: (id, todotitle) => {}, // update a existing todo
    deletetodo: (id) => {}, //to delete an todo
    toggleIsCompleted: (id)=>{}, //
})

const TodoProvider = TodoContext.Provider

const useTodo = () => {
    return useContext(TodoContext)
}

export {TodoProvider, useTodo, TodoContext}; 



// Each todo will have "id", "title", "isComplete"  => array of these object will be in this context