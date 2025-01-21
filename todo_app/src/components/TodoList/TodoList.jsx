import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";
import todoContext from "../context/todoContext";


function TodoList({list, updateList}) {
    

    return (
        <div className="todoListWrapper">
            {list.length > 0 && list.map((todo) => (<Todo 
                                                    key={todo.id} 
                                                    todoData={todo} 
                                                    todoStatus={todo.status}
                                                    id={todo.id}
                                                    changeStatus={(finish) => onChangeStatus(todo, finish)}
                                                    removeTodo={() => onRemoveTodo(todo)}
                                                    editTodo={(data) => onEditTodo(todo, data)}                                                    
                                                />))}
        </div>
    )
}

export default TodoList;