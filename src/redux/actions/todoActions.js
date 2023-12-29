import { ADD_TASK,REMOVE_TASK,UPDATE_TASK } from "./actionTypes";

export function addTask(task){
    return{
        type:ADD_TASK,
        payload:task
    }
}
export function removeTask(id){
    return{
        type:REMOVE_TASK,
        payload:id
    }
}
export function updateTask(task){
    return{
        type:UPDATE_TASK,
        payload:task
    }
}