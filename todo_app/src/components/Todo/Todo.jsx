import "./todo.css"
function Todo({todoData, changeStatus, todoStatus, removeTodo, id}) {
    function handleStatus() {
        (todoStatus == "pending")? changeStatus("completed") : changeStatus("pending");
    }

    return (
        <div className="todoWrapper">
            <h3>{todoData.id}. {todoData.todoData}</h3>
            <p>Status: {todoStatus}</p>
            <div className="btnContainer">
                <button onClick={handleStatus}>Update Status</button>
                <button onClick={() => removeTodo(id)}>Remove</button>
            </div>
        </div>
    )
}

export default Todo;