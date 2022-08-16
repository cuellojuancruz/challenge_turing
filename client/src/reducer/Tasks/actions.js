import axios from 'axios';



export function getTasks(){
    return function(dispatch){
        axios.get("http://localhost:3001/getTasks/")
        .then((res) => {
            dispatch({
                type:"getTasks",
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getMyTasks(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/getMyTasks/${id}`,)
        .then((res) => {
            dispatch({
                type:"getMyTasks",
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export function createTask(task){
    return function(dispatch){
        axios.post(`http://localhost:3001/createTask/`, task)
        .then((res) => {
            dispatch({
                type:"createTask",
                payload: res.data
            })
        })
    }
}


