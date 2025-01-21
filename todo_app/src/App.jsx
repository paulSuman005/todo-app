import { useContext, useReducer, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import todoContext from './components/context/todoContext'
import todoReducer from './components/reducers/todoReducer'
import DispatchContext from './components/context/DispatchContext'

function App() {
  // const [list, setList] = useState([
  //   {id: 1, status: "pending", todoData: "todo 1"},
  //   {id: 2, status: "pending", todoData: "todo 2"}
  // ])

  const [list, dispatch] = useReducer(todoReducer, [{id: 1, status: "pending", todoData: "todo 1"},{id: 2, status: "pending", todoData: "todo 2"}]);

  return (
    <todoContext.Provider value={{list}}>
      <DispatchContext.Provider value={{dispatch}}>
        <div className='mainContainer'>
        <AddTodo/>
        <TodoList/>
        </div>
      </DispatchContext.Provider>
    </todoContext.Provider>
  )
}

export default App
