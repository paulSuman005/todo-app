import { useState } from "react";
import "./addTodo.css";

function AddTodo() {
    const [inputText, setInputText] = useState("");

    return (
        <div className="addTodoWrapper">
            <input type="text" placeholder="Write Todo" onChange={(e) => setInputText(e.target.value)}/>
            <button>Add</button>
        </div>
    )
}

export default AddTodo;