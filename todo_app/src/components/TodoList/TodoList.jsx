import { useState } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";

function TodoList() {
    const [list, setList] = useState([
        {id: 1, todoData: "todo 1"},
        {id: 2, todoData: "todo 2"},
        {id: 3, todoData: "todo 1"},
        {id: 4, todoData: "todo 2"},
        {id: 5, todoData: "todo 1"},
        {id: 6, todoData: "todo 2"}
    ])

    return (
        <div className="todoListWrapper">
            {list.length > 0 && list.map((todo) => (<Todo key={todo.id} todoData={todo}/>))}
        </div>
    )
}

export default TodoList;