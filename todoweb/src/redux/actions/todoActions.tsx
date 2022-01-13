import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {RootState} from '../store'
import axios from "axios"

export const getTodos = ():ThunkAction<Promise<void>,RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>):Promise<void>=>{
    try {
        await axios.get('http://localhost:3001/todos')
        .then(response=>{
            dispatch({type:"TODO_SUCCESS", payload:response.data })
        });
    } catch (error) {
        console.log(error)
    }
}
export const getTodoById = (id:number):ThunkAction<Promise<void>,RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>):Promise<void>=>{
    try {
        await axios.get(`http://localhost:3001/todos/${id}`)
        .then(response=>{
            dispatch({type:"TODO_BY_ID_SUCCESS", payload:response.data })
        });
    } catch (error) {
        console.log(error)
    }
}
