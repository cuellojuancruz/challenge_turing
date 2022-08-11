const initialState = {
    tasks: []
}



function tasksReducer (state = initialState, action){

    // console.log(action.type)

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

    return state;
}



export default tasksReducer;