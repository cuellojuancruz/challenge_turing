import axios from 'axios';



// export function getTasks(){
//     console.log("action del get")
//     return function(dispatch){
//         console.log("antes del action")
//         axios.get("http://localhost:3001/getTasks/", {})
//         .then((res) => {
//             console.log(res.data, "dentro del then")
//             dispatch({
//                 type:"getTasks",
//                 payload: res.data
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }
// }


// export function createTask(task){
//     return function(dispatch){
//         console.log("antes del axios")
//         axios.post("http://localhost:3001/createTask/", task)
//         .then((res) => {
//             console.log(res.data, "data del post")
//             dispatch({
//                 type:"createTask",
//                 payload: res.data
//             })
//         })
//     }
// }

export function prueba(){
    console.log("antes de la function dispatch")
    return function(dispatch){
        console.log("antes del axios")
        axios.post("http://localhost:3001/prueba/")
        .then((res) => {
            console.log(res.data, "data del post")
            dispatch({
                type:"createTask",
                payload: res.data
            })
        })
    }
}

