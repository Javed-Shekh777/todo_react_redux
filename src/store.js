import {createStore} from "redux"
import todoReducers from "./redux/reducers/reducer";
// import rootReducer from "./redux/reducers/main";

const store = createStore(todoReducers)

export default store;