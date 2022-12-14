import Home from "./components/Home/Home";
import CreateTask from "./components/CreateTask/CreateTask";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";



function App() {
  const isAuthenticated = useSelector((state) => state.loginReducer.status);


  return (
    <div>
      {isAuthenticated === "Authenticated" ? (
        <>
          <Route exact path="/" component={Home} />
          <Route path="/CreateTask" component={CreateTask} />
        </>
      ) : (
        <div>
        <Switch>
          <Route exact path="/Register" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
