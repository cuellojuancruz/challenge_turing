import { combineReducers } from "redux";
import  tasksReducer  from "../reducer/Tasks/index.js"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
    tasksReducer: tasksReducer,
    form: formReducer
  });
  
export default rootReducer;