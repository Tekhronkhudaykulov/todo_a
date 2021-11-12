import { combineReducers, createStore } from "redux";
import todo from "./reducer/todo";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    todo
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;