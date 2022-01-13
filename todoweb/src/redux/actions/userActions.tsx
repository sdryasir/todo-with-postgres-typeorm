import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {RootState} from '../store'
import axios from "axios"

export const login = (email:string, password:string):ThunkAction<Promise<void>,RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>):Promise<void>=>{
    try {
        await axios.post('http://localhost:3001/auth/login', {email, password})
        .then(response=>{
            const userData = {fullname:response.data.user.fullname, email:response.data.user.email, isAuthenticated:true}
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', JSON.stringify(userData))
            dispatch({type:"USER_LOGIN_SUCCESS", payload:userData })
        });
    } catch (error) {
        console.log(error)
    }
}
export const logout = ():ThunkAction<Promise<void>,RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>):Promise<void>=>{
    try {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        dispatch({type:'USER_LOGOUT'})
    } catch (error) {
        console.log(error)
    }
}