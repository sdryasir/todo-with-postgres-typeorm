export interface UserState{
    loading?:boolean,
    error?:string;
    userInfo?:{id:number, fullname:string, email:string, isAuthenticated:boolean}
}
interface Action{
    type:string;
    payload?:string
}


export const userReducer = (state:UserState = {}, action:Action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return { loading:true }
        case 'USER_LOGIN_SUCCESS':
            return { 
                loading:false, 
                userInfo:action.payload
            } 
        case 'USER_LOGOUT':
            return {}
        default:
            return state  

    }
}