import React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, Field, Form } from "redux-form";
import { Link } from "react-router-dom";
import {
  checkingAuthentication,
  loginUser,
} from "../../reducer/Login/actions";
import "./Login.css"

export function Login(props) {
  const dispatch = useDispatch();


  const status = useSelector(state => state.loginReducer.status)

  const isAuthenticated = useMemo( () => status === "checking", [status])

  const handleSubmit = e => {
    dispatch(checkingAuthentication());
    dispatch(loginUser(e));
  };



  return (
    <div>
      <Form onSubmit={props.handleSubmit(handleSubmit)} className="Form-Login">
        <div>
          <h4 className="Credentials-Input">Email</h4>
          <Field name="email" type="email" component="input" className="Credentials"/>
        </div>
        <div>
          <h4 className="Credentials-Input">Contraseña</h4>
          <Field name="password" type="password" component="input" className="Credentials"/>
        </div>
        <div className="task-link" style={{width:"105px", marginTop:"25px"}}>
          <button disabled= { isAuthenticated } type="submit" className="createTask" style={{marginTop:"7px"}}>
            Login
          </button>
        </div>
        <Link to="/Register" className="Link-Not-Account">
        <button className="Not-Account">¿No tienes cuenta?</button>
      </Link>
      </Form>
    </div>
  );
}

const login = reduxForm({
  form: "contact",
})(Login);

export default login;
