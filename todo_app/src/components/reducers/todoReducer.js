function todoReducer(state, action) {
    if(action.type == "add_todo"){
        let todoText = action.payload.todoText;
        return [...state, {id: state.length+1, todoData: todoText, status:"pending"}]
    }
    else if(action.type == "edit_todo") {
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        const updatedList = state.map((t) => {
            if(t.id == todo.id){
                t.todoData=todoText;
            }
            return t;
        })
        return updatedList;
    }
    else if(action.type == "update_status"){
        let todo = action.payload.todo;
        let finish = action.payload.finish;
        const updatedList = state.map((t) => {
            if(t.id == todo.id){
                t.status = finish;
            }
            return t;
        })
        return updatedList;
    }
    else if(action.type == "remove_todo"){
        let todo = action.payload.todo;
        const updatedList = state.filter(t => t.id != todo.id);
        const newList = updatedList.map((t, index) => ({
            ...t, id: index+1
        }))
        return newList;
    }
    else return state;

}

export default todoReducer;