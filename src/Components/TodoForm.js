import React ,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask,removeTask,updateTask } from "../redux/actions/todoActions.js"


const TodoForm = ({updateId,setUpdateId,task,setTask})=>{
  
 
  const dispatch = useDispatch();
  const tasks = useSelector((state)=>state);

    function addTodo(e){
       e.preventDefault();
       if(updateId!==""){
           const updateObj = {
            id:updateId,
            title:task
           }
           dispatch(updateTask(updateObj));
           setUpdateId("");
       }
        else{
            const taskObj = {
                id:tasks.length==0?1:tasks[tasks.length-1].id + 1,
                title:task
            }
            dispatch(addTask(taskObj));
        }
       
        setTask("");
        

    }
    return(
        
        <form onSubmit={addTodo}>
            <h1>{updateId===""?"ADD TO-DO":"UPDATE TO-DO"}</h1>
            <input type="text" required placeholder={updateId===""?"add new task":"update task"} value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit">{updateId===""?"ADD TASK":"UPDATE TASK"}</button>
        </form>
       
        
        
     
    )
}
export default TodoForm;