import styled from "styled-components";
import Todo from './Todo'


function TodoList ({todos}) {

    const todoItems = todos.map((todo, _index) => (
        <Todo key={_index} title={todo.title} color={todo.color}/>
      ))


    return (
        <ul>{todoItems}</ul>
    )
}

export default TodoList