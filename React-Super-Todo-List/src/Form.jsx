import Button from './Button'
import styled from 'styled-components'

function Form({ onAddTodo }) {
  function handleFormSubmit(event) {
    event.preventDefault()
    const form = event.target
    const inputField = form.todo
    const inputValue = inputField.value

    const newTodo = {
      title: inputValue,
      color: 'gray',
    }

    onAddTodo(newTodo)

    form.reset()
    inputField.focus()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' name='todo' placeholder='add a todo' />
      <Button text='submit' />
    </form>
  )
}

export default Form
