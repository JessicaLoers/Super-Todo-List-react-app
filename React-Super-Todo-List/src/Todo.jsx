import { useState } from 'react'
import './Todo.css'
import styled from 'styled-components'

function Todo({ color, title }) {
  const [isDone, setIsDone] = useState(false)

  function markAsDone() {
    setIsDone(!isDone)
  }

  const listItemLook = isDone ? 'strike-through' : ''

  return (
    <li style={{ color: color }}>
      <label className={listItemLook}>
        <input type='checkbox' onChange={markAsDone} /> {title}
      </label>
    </li>
  )
}

export default Todo
