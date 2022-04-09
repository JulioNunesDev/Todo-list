import { useState } from "react";
import './AddTasks.css'
import Button from "./Button";

const AddTasks = ({handleAddTask}) => {
    const [inputData,setInputData]= useState('')

        const handleChange=(e)=>{
            setInputData(e.target.value)
        }

        const handleClickAdd=(inputs)=>{
            
            if(inputData == ""){
                return alert('adicione uma tarefa')
            }else{
                handleAddTask(inputData)
                setInputData('')
            }
            
           
        }


    return ( 
        <div className="container-div">
        <input className="container-input" value={inputData} type="text" onChange={handleChange} />
            <div className="container-button">
                <Button onClick={handleClickAdd} >
                    Adicionar
                </Button>
            </div>
        </div>
     );
}
 
export default AddTasks;