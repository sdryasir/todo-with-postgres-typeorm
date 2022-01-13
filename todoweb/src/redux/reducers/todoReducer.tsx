export interface ToDoState{
    loading?:boolean,
    error?:string;
    todos?:{id:number, title:string, description:string, status:boolean}
}
interface Action{
    type:string;
    payload?:string
}


export const todoReducer = (state:ToDoState = {}, action:Action)=>{
    switch(action.type){
        case 'TODO_REQUEST':
            return { loading:true }
        case 'TODO_SUCCESS':
            return { loading:false, todos:action.payload } 
        case 'TODO_BY_ID_SUCCESS':
            return {loading:false, todo:action.payload}
        default:
            return state  

    }
}