import {combineReducers, createStore} from "redux";
import formReducer from "./form/reducer";


const initialState = {};
const reducers = combineReducers<any>({
    form: formReducer
});

const store = createStore(reducers, initialState);

export default store;
