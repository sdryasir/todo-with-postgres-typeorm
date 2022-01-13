import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer, UserState } from "./reducers/userReducer";
import {todoReducer} from './reducers/todoReducer'

const reducers = combineReducers({
    user:userReducer,
    todos:todoReducer
})

interface IState{
    id:number;
    fullname:string;
    email:string;
    password:string
}


const initialState = {
    user:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user') || '{}'):{}
};

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
export type RootState = ReturnType<typeof store.getState>