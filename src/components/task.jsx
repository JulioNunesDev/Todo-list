import './task.css'
import { useNavigate}from 'react-router-dom'
const Task = ({task, handleCompletedTask,handleTaskDelete}) => {

   const nave = useNavigate()
   const handleNavegate=()=>{
      nave(`/${task.title}`)
   }
   
   return ( 
        <div
        className="container-task"  style={task.completed ? {borderLeft: "6px solid chartreuse"} : {borderLeft: "6px solid red"}}
        >
          <div  className='container-title' onClick={()=>handleCompletedTask(task.id)} >
          {task.title}
          </div>

          <div className='container-button'>
             <button className='remove-task-buttons' onClick={()=>handleTaskDelete(task.id)}>X</button>
             <button className='see-details-buttons' onClick={handleNavegate} >O</button>
          </div>
        </div>
     );
}
 
export default Task;