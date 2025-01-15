import "./todo.css"
function Todo({todoData}) {
    return (
        <div className="todoWrapper">
            <h3>{todoData.id}. {todoData.todoData}</h3>
            <p>Status Pending</p>
            <div className="btnContainer">
                <button>Update Status</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default Todo;