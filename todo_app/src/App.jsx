import { useContext, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import todoContext from './components/context/todoContext'

function App() {
  const [list, setList] = useState([
    {id: 1, status: "pending", todoData: "todo 1"},
    {id: 2, status: "pending", todoData: "todo 2"}
  ])

  return (
    <todoContext.Provider value={{list, setList}}>
      <div className='mainContainer'>
      <AddTodo/>
      <TodoList list={list} updateList={setList} />
      </div>
    </todoContext.Provider>
  )
}

export default App
