import React from "react"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks, getMyTasks } from '../../reducer/Tasks/actions';
import { logOut } from '../../reducer/Login/actions';
import "./Home.css"




export function Home(){
    
    
    const dispatch = useDispatch()
    const userId = useSelector(state => state.loginReducer.user)
    
    


    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const handleLogOut =() => {
        dispatch(logOut())
    }

    const handleMyTasks =() => {

        dispatch(getMyTasks(userId.id))
    }



    const tasks = useSelector((state) => state.tasksReducer.tasks)

    return(
        <div>

            <div className="Bottom-NavBar">

            <Link to="/CreateTask" className='create-link'>
                <div>
                    <button className='createtask'>Crear tarea</button>
                </div>
            </Link>

            <div className="MyTasks">
                <button onClick={() => {handleMyTasks()}} className='createtask'>Mis Tareas</button>
            </div>
            <Link to="/" className='create-link'>
                <div>
                    <button onClick={() => {handleLogOut()}} className='createtask'>Log Out</button>
                </div>
            </Link>

            </div>


        <div className='conteiner'>
            {
                tasks?.map(task =>{
                    return(
                        <div key={task.id} className='new-task-input'>
                            <h1 className='task-info'>{task.name}</h1>
                            <p className='task-info'>{task.description}</p>
                        </div>
                    )
                })
            }
        </div>

        </div>
    )
}



export default Home;