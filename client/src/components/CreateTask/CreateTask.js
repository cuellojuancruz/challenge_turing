import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm, Field, Form } from "redux-form";
import { createTask } from "../../reducer/Tasks/actions";
import React from "react"
import "./CreateTask.css"

export function CreateTask(props) {
    const dispatch = useDispatch();

    const userName = useSelector(state => state.loginReducer.user)
    const Do = {id: 0, name: userName.name, description: ""}
    Do.id =userName.id


    const handleSubmit = formValues => {
      Do.description = formValues
      dispatch(createTask(Do))
    }

  

  return (
      <Form onSubmit={props.handleSubmit(handleSubmit)}>
      <Link to="/" className="task-link">
        <button className='createTask'>Home</button>
      </Link>
        <div className="create-div">
          <label className="task-label">Descripcion</label>
          <Field className="create-input" name="description" component="input" type="text"/>
        </div>
        <div className="task-link">
        <button type="submit" className='createTask'>Submit</button>
        </div>
      </Form>
  );
}

const CreateTaskForm = reduxForm({
    form: 'contact'
  })(CreateTask)
  

export default CreateTaskForm;
 