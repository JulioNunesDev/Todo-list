
import './App.css';
import { useEffect, useState } from 'react';
import Tasks from './components/tasks';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import { BrowserRouter,Route, Routes, } from 'react-router-dom';
import TaskDetails from './components/TasksDetails';


function App() {
  const [tasks,setTasks]=useState([
    {
    id:1,
    title: 'estudar',
    completed: false
    },
    {
      id: 2,
      title: 'comer pizaa',
      completed: false
      }
])

 const handleAddTask = (newTitle) => {
   const newTasks = [...tasks,{
     id: Math.random(),
     title: newTitle,
     completed: false
   }]
   setTasks(newTasks)
 }
  
 const handleCompletedTask= (taskId)=>{
  const newCompleted = tasks.map((task)=>{
   if(task.id === taskId) return { ...task, completed: !task.completed} 

    return task
  })
  setTasks(newCompleted)
}

 const handleTaskDelete=(taskId)=>{
  const newDelete = tasks.filter(task => task.id != taskId)
  setTasks(newDelete)
}

const [efeitos, setEfeitos]=useState({
  out: 'out-out' 
})

  

  return (

    <BrowserRouter>
    <div className='container' >
      <Header efeitos={efeitos}/>
      <Routes>

      <Route path="/"  element={<>
      
        <AddTasks handleAddTask={handleAddTask} />
        <Tasks tasks={tasks} handleCompletedTask={handleCompletedTask} handleTaskDelete={handleTaskDelete} /></>}/>

        <Route path='/:taskTitle' exact element={<TaskDetails/>}/>
      </Routes>
    </div>
      </BrowserRouter>
     

    );
}

export default App;
