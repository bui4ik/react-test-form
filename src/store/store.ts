import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from "./form/reducer";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const reducers = combineReducers<any>({
    form: formReducer
});

const store = createStore(reducers, initialState , composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

export default store;
