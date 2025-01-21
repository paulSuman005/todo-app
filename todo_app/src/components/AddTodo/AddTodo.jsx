import { useContext, useState } from "react";
import "./addTodo.css";
import todoContext from "../context/todoContext";
import DispatchContext from "../context/DispatchContext";

function AddTodo() {
    const [inputText, setInputText] = useState("");
    const {list} = useContext(todoContext);
    const {dispatch} = useContext(DispatchContext);

    function updateList(inputText){
        dispatch({type: "add_todo", payload: {todoText: inputText}});
    }

    return (
        <div className="addTodoWrapper">
            <input type="text" placeholder="add your next todo..." value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={() => {updateList(inputText)
                                    setInputText("");
            }}>Add</button>
        </div>
    )
}

export default AddTodo;