 import { combineReducers } from "redux";
import todoReducers from "./reducer";


 const rootReducer =  combineReducers({
  
  item:todoReducers
});

export default rootReducer;