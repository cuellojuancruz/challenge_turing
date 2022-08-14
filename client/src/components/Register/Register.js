import React from "react";
import { useDispatch } from "react-redux";
import { reduxForm, Field, Form } from "redux-form";
import { Link } from "react-router-dom";
import {
  checkingAuthentication, registerUser,
} from "../../reducer/Login/actions";

export function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    console.log(e)
    dispatch(checkingAuthentication())
    dispatch(registerUser(e));
  };

  return (
    <div>
      <Form onSubmit={props.handleSubmit(handleSubmit)}>
        <div>
          <h4>Nombre completo</h4>
          <Field name="nombre" type="text" component="input" />
        </div>
        <div>
          <h4>Email</h4>
          <Field name="email" type="email" component="input" />
        </div>
        <div>
          <h4>Contraseña</h4>
          <Field name="password" type="password" component="input" />
        </div>
        <div className="task-link">
          <button
            type="submit"
            className="createTask"
          >
            Crear cuenta
          </button>
        </div>
        <Link to="/">
          <button className="createTask">¿Ya tienes una cuenta?</button>
        </Link>
      </Form>
    </div>
  );
}

const register = reduxForm({
  form: "contact",
})(Register);

export default register;
