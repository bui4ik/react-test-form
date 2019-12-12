import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from "./form/reducer";


const initialState = {};
const reducers = combineReducers<any>({
    form: formReducer
});

const store = createStore(reducers, initialState , composeWithDevTools(
));

export default store;
