const initialState = {
    status: "not-Authenticated",
    user: {}
}



function loginReducer (state = initialState, action){


    if(action.type === "checkingAuthentication"){
        return {
            ...state,
            status: action.payload
        }
    }

    if(action.type === "startGoogleSignIn"){
        return {
            ...state,
            status: "Authenticated",
            user: action.payload
        }
    }

    if(action.type === "registerUser"){
        return {
            ...state,
            status: "Authenticated",
            user: action.payload
        }
    }

    if(action.type === "loginUser"){
        return {
            ...state,
            status: "Authenticated",
            user: action.payload
        }
    }

    if(action.type === "logOut"){
        return {
            ...state,
            status: "not-Authenticated",
            user: {}
        }
    }

    if(action.type === "errorMessage"){
        return {
            ...state,
            status:"not-Authenticated",
            user: action.payload
        }
    }


    return state;
}



export default loginReducer;