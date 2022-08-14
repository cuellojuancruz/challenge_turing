import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, Field, Form } from "redux-form";
import { Link } from "react-router-dom";
import {
  checkingAuthentication,
  loginUser,
  startGoogleSignIn,
} from "../../reducer/Login/actions";

export function Login(props) {
  const dispatch = useDispatch();


  const status = useSelector(state => state.loginReducer.status)

  const isAuthenticated = useMemo( () => status === "checking", [status])

  const handleSubmit = e => {
    dispatch(checkingAuthentication());
    dispatch(loginUser(e));
  };

  const handleGoogle = () => {
    dispatch(startGoogleSignIn());
    dispatch(checkingAuthentication());
  };

  return (
    <div>
      <Form onSubmit={props.handleSubmit(handleSubmit)}>
        <div>
          <h4>Email</h4>
          <Field name="email" type="email" component="input" />
        </div>
        <div>
          <h4>Contraseña</h4>
          <Field name="password" type="password" component="input" />
        </div>
        <div className="task-link">
          <button disabled= { isAuthenticated } type="submit" className="createTask">
            Login
          </button>
        </div>
        <Link to="/Register" className="task-link">
        <button className='createTask'>¿No tienes cuenta?</button>
      </Link>
      </Form>
      <Form onSubmit={props.handleSubmit(handleGoogle)}>
      
      <button
        disabled= { isAuthenticated }
        type="submit"
        className="createTask"
        onClick={ handleGoogle }
      >
        LoginWithGoogle
      </button>
      </Form>
    </div>
  );
}

const login = reduxForm({
  form: "contact",
})(Login);

export default login;
