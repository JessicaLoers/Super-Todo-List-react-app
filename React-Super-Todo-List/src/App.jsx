import './Todo.css'

import { useEffect, useState } from 'react'

import styled from 'styled-components'

import Headline from './Headline'
import TodoList from './TodoList'
import Form from './Form'
import Button from './Button'

function App() {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const todosFromLocalStorage =
      JSON.parse(localStorage.getItem('_TODOS_')) ?? []
    setTodo(todosFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('_TODOS_', JSON.stringify(todos))
  }, [todos])

  function addTodo(newTodo) {
    const newTodos = [newTodo, ...todos]
    setTodo(newTodos)
  }

  return (
    <div className='App'>
      <Headline name='Shopping List' />
      <Form onAddTodo={addTodo} />
       <h5>ich bin eine h5</h5>
      <TodoList todos={todos} />
    </div>
  )
}

export default App

