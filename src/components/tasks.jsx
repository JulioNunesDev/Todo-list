
import Task from "./task";

const Tasks = ({tasks, handleCompletedTask,handleTaskDelete}) => {
    console.log(tasks)

    return ( 
        <>
        {tasks.map(task=><Task key={task.id} task={task} handleCompletedTask={handleCompletedTask} handleTaskDelete={handleTaskDelete}/>)}
        </>
     );
}
 
export default Tasks;
