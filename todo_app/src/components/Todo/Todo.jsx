import { useState } from "react";
import "./todo.css"
function Todo({todoData, changeStatus, todoStatus, removeTodo, editTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData.todoData);

    function handleStatus() {
        (todoStatus == "pending")? changeStatus("completed") : changeStatus("pending");
    }

    return (
        <div className="todoWrapper">
            <div className="headingContainer">
                <h3>{todoData.id}. 
                    {(isEditing) ? <input className="editText" type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/> : <span>{todoData.todoData}</span>}
                </h3>
                <button onClick={() => {setIsEditing(!isEditing);
                                        editTodo(editText);
                }}>
                    {(isEditing) ? "save" : "edit"}</button>
            </div>
            <p>Status: {todoStatus}</p>
            <div className="btnContainer">
                <button onClick={handleStatus}>Update Status</button>
                <button onClick={removeTodo}>Remove</button>
            </div>
        </div>
    )
}

export default Todo;