import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import './TaskDetails.css'

const TaskDetails = () => {

    const nave = useNavigate()
    const params = useParams()

    const handleClickBack=()=>{
        nave('/')
    }
    return ( 
        <div>
        <div className="button-container">
            <Button onClick={handleClickBack}> 
                Voltar
            </Button>
        </div>
        <div className="container-titles">
            <h2>{params.taskTitle}</h2>
            <p> tarefa p</p>
        </div>
        </div>
     );
}
 
export default TaskDetails
