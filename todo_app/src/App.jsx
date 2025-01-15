import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [list, setList] = useState([
    {id: 1, status: "pending", todoData: "todo 1"},
    {id: 2, status: "pending", todoData: "todo 2"}
])

  return (
    <div className='mainContainer'>
      <AddTodo updateList={(todo) => setList([...list, {id: list.length+1, status: "pending", todoData: todo}])}/>
      <TodoList list={list} updateList={setList} />
    </div>
  )
}

export default App
