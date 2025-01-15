import { useState } from "react";
import Todo from "../Todo/Todo";
import "./todoList.css";

function TodoList({list, updateList}) {

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

                                                        updateList(updatedList);
                                                    }}

                                                    removeTodo={(todoId) => {
                                                        const updatedList = list.filter(t => t.id != todoId);
                                                        updateList(updatedList);
                                                    }}
                                                    
                                                />))}
        </div>
    )
}

export default TodoList;