import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from './counterReducer';
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

declare const window: any
window.store = store