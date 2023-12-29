import { ADD_TASK,REMOVE_TASK,UPDATE_TASK } from "../actions/actionTypes";
const initialState=[];

const todoReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_TASK:return [...state,action.payload];
        case REMOVE_TASK:return state.filter((task)=>task.id!==action.payload);
        case UPDATE_TASK:return [...state.filter((task)=>task.id!==action.payload.id),action.payload];
       default:return state;
    }

}
export default todoReducer;