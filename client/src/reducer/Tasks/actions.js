import axios from 'axios';



export function getTasks(){
    return function(dispatch){
        axios.get("http://localhost:3001/getTasks/", {})
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


export function createTask(task){
    return function(dispatch){
        console.log("antes del axios", task)
        axios.post("http://localhost:3001/createTask/", task)
        .then((res) => {
            console.log(res.data, "data del post")
            dispatch({
                type:"createTask",
                payload: res.data
            })
        })
    }
}


