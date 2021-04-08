import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from './counter-reducer';
import thunkMiddleware from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
});

export type AppRootStateType = ReturnType<typeof rootReducer>

declare const window: any
window.store = store