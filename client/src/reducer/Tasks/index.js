const initialState = {
    tasks: []
}



function tasksReducer (state = initialState, action){


    if(action.type === "getTasks"){
        return {
            ...state,
            tasks: action.payload
        }
    }

    if(action.type === "createTask"){
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    }

    if(action.type === "getMyTasks"){
        return {
            ...state,
            tasks: action.payload
        }
    }

    return state;
}



export default tasksReducer;