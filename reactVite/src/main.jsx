import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'


function App(){
      const [todos, setTodos] = useState([]) // no todo in array in starting

      const addTodo = (todocontent) => { // add todo
          setTodos((prevTodos) => [{id: Date.now(), todotitle: todocontent, iscomplete: false}, ...prevTodos])
      }

      const updateTodo = (id, todo) =>{
          setTodos((prev) => prev.map((oldtodo) => (oldtodo.id === id ? todo : oldtodo) ))
      }
      const deletetodo = (id) => {
        setTodos((prev) => prev.filter((oldtodo) => oldtodo.id !== id))
      }

      const toggleIsCompleted = (id) => {
          setTodos((prev) => prev.map((oldtodo) => oldtodo.id === id ? {...oldtodo, iscomplete: !iscomplete} : oldtodo))
      }


      // Local storage
      useEffect(()=>{
          const todos = JSON.parse(localStorage.getItem("todos")) //"local storage me todos var me stored hai unko get kr rhe hai"

          if (todos && (todos.length > 0)) setTodos(todos);

      }, [])

      useEffect(() => { // if any change in todos then save to localstorage 
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])

      return (
        <p> app content</p>
      )
}


createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <TodoProvider value={{todos, addTodo, updateTodo, deletetodo, toggleIsCompleted}}>
        <h1> Hello Raja</h1>
        <App/>
    </TodoProvider>
  </React.StrictMode>
)
