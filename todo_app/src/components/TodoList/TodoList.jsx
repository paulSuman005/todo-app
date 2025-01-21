import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";
import todoContext from "../context/todoContext";

function TodoList() {
    const {list, setList} = useContext(todoContext);

    function onChangeStatus(todo, finish){
        const updatedList = list.map((t) => {
            if(t.id == todo.id){
                t.status = finish;
            }
            return t;
        })

        setList(updatedList);
    }

    function onRemoveTodo(todo){
        const updatedList = list.filter(t => t.id != todo.id);
        const newList = updatedList.map((t, index) => ({
            ...t, id: index+1
        }))
        setList(newList);
    }

    function onEditTodo(todo, data) {
        const updatedList = list.map((t) => {
            if(t.id == todo.id){
                t.todoData=data;
            }
            return t;
        })

        setList(updatedList);
    }

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