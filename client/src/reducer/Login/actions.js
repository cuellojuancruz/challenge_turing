import axios from 'axios';


export function checkingAuthentication(){
    return function(dispatch){
        dispatch({
            type: "checkingAuthentication",
            payload: "checking"
        })
    }
}


export function registerUser(user){
    return function(dispatch){
        axios.post("http://localhost:3001/createUser/", user)
        delete user.password
        dispatch({
            type: "registerUser",
            payload: user
        })
    }
}

export function loginUser({email, password}){
    return async function(dispatch){
        try {
            const user = await axios.get(`http://localhost:3001/getUser/${email}/${password}`)
            dispatch({
                type: "loginUser",
                payload: user.data
            })
        } catch (error) {
            alert("usuario no encontrado")
        }
    }
}

export function logOut(){
    return async function(dispatch){
        dispatch({
            type: "logOut",
        })
    }
}

