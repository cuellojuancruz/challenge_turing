import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { prueba } from '../../reducer/Tasks/actions';


export function Home(){


    const dispatch = useDispatch()

    // useEffect(() => {
    // }, [dispatch])
    function hadleSend(){
        dispatch(prueba)
    }

    const tasks = useSelector((state) => state.tasksReducer.tasks)

    return(
        <div>
            {
                tasks?.map(task =>{
                    return(
                        <div>
                            <h1>{task.name}</h1>
                            <p>{task.description}</p>
                        </div>
                    )
                })
            }
            <Link to="/CreateTask">
            <button onClick={() => {hadleSend()}}>Crear tarea</button>
            </Link>
        </div>
    )
}



export default Home;