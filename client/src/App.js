import Home from "./components/Home/Home"
import CreateTask from "./components/CreateTask/CreateTask";
import { Route } from "react-router-dom";
import React from "react";



function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/CreateTask" component={CreateTask}/>
    </>
  );
}

export default App;