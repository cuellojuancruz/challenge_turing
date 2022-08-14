import { combineReducers } from "redux";
import  tasksReducer  from "../reducer/Tasks/index.js"
import loginReducer from "../reducer/Login/index"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
    tasksReducer: tasksReducer,
    form: formReducer,
    loginReducer: loginReducer
  });
  
export default rootReducer;