import { useDispatch,useSelector } from "react-redux";
import { removeTask ,updateTask} from "../redux/actions/todoActions";


const TodoTask=({setUpdateId,setTask})=>{
    const dispatch = useDispatch();
    const tasks = useSelector((state)=>state);
    return (
        <div >
        {
          tasks.length>0 && tasks.map((item)=>(
            <div key={item.id} style={{display:"flex", justifyContent:"space-between", width:"fit-content", gap:"10px" , margin:"10px"}}>
                <p>{item.title}</p>
                <button onClick={()=>dispatch(removeTask(item.id))}>delete</button>
                <button onClick={()=>{setUpdateId(item.id);setTask(item.title)}}>update</button>
            </div>
           ))
        }
    </div>
    )
}
export default TodoTask;