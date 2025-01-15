import { useState } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";

function TodoList({list}) {

    return (
        <div className="todoListWrapper">
            {list.length > 0 && list.map((todo) => (<Todo key={todo.id} todoData={todo}/>))}
        </div>
    )
}

export default TodoList;