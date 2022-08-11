import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
// import { createTask } from "../../reducer/Tasks/actions";

export function CreateTask(props) {
  const dispatch = useDispatch();


    const handleSubmit = formValues => {
        // dispatch(createTask(formValues))
    }

  

  return (
      <form onSubmit={props.handleSubmit(handleSubmit)}>
      <Link to="/">
        <button>Home</button>
      </Link>
        <div>
          <label>Nombre de tarea</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label>Descripcion</label>
          <Field name="description" component="input"/>
        </div>
        <button type="submit">Submit</button>
      </form>
  );
}

const CreateTaskForm = reduxForm({
    form: 'contact'
  })(CreateTask)
  

export default CreateTaskForm;
 