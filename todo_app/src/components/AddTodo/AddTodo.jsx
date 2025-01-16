import { useContext, useState } from "react";
import "./addTodo.css";
import todoContext from "../context/todoContext";

function AddTodo() {
    const [inputText, setInputText] = useState("");
    const {list, setList} = useContext(todoContext);

    function updateList(){
        setList([...list, {id: list.length+1, todoData: inputText, status:"pending"}]);
    }

    return (
        <div className="addTodoWrapper">
            <input type="text" placeholder="add your next todo..." value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={() => {updateList()
                                    setInputText("");
            }}>Add</button>
        </div>
    )
}

export default AddTodo;