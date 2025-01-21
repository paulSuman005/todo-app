import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";
import todoContext from "../context/todoContext";
import DispatchContext from "../context/DispatchContext";


function TodoList() {
    const {list} = useContext(todoContext);
    const {dispatch} = useContext(DispatchContext);

    function onChangeStatus(todo, finish){
        dispatch({type: "update_status", payload: {
            todo: todo,
            finish: finish
        }})
    }
    function onRemoveTodo(todo){
        dispatch({type: "remove_todo", payload: {todo: todo}})
    }
    function onEditTodo(todo, data) {
        dispatch({type: "edit_todo", payload: {todo: todo, todoText: data}})
    }

    return (
        <div className="todoListWrapper">
            {list && list.length > 0 && list.map((todo) => (<Todo 
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