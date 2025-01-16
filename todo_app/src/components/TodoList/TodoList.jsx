import { useContext } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";
import todoContext from "../context/todoContext";

function TodoList() {
    const {list, setList} = useContext(todoContext);

    return (
        <div className="todoListWrapper">
            {list.length > 0 && list.map((todo) => (<Todo 
                                                    key={todo.id} 
                                                    todoData={todo} 
                                                    todoStatus={todo.status}
                                                    id={todo.id}
                                                    changeStatus={(finish) => {
                                                        const updatedList = list.map((t) => {
                                                            if(t.id == todo.id){
                                                                t.status = finish;
                                                            }
                                                            return t;
                                                        })

                                                        setList(updatedList);
                                                    }}

                                                    removeTodo={() => {
                                                        const updatedList = list.filter(t => t.id != todo.id);
                                                        const newList = updatedList.map((t, index) => ({
                                                            ...t, id: index+1
                                                        }))
                                                        setList(newList);
                                                    }}

                                                    editTodo={(data) => {
                                                        const updatedList = list.map((t) => {
                                                            if(t.id == todo.id){
                                                                t.todoData=data;
                                                            }
                                                            return t;
                                                        })

                                                        setList(updatedList);
                                                    }}
                                                    
                                                />))}
        </div>
    )
}

export default TodoList;