 import React, {useState} from 'react';
 import "./TodoList.css"

 function TodoList(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [index, setIndex] = useState(null);

    const addTask =()=>{
        if (index===null){
            setTasks([...tasks,task])
        }else {
            const updateTasks = tasks;
            updateTasks[index] = task
            setTasks(updateTasks);
            setIndex(null)
        }

        setTask("")
    }

    const editTask =(index)=>{
        setIndex(index)
        setTask(tasks[index])
    }

    const deleteTask =(deleteIndex)=>{
       setTasks(tasks.filter(((task,i) => i !== deleteIndex)))
        setIndex(null)
    }

     return(
         <div>
            <h1>Todo List</h1>

             <input
                 type={"text"}
                 placeholder={"Add task ..."}
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
             />
             <button disabled={task.trim()===""}
                     onClick={addTask}
             >{index===null?"Add":"Edit"}</button>

             {
                 tasks.length>0 && (
                     <ul>
                         {
                             tasks.map((task, index) =>
                                 <li key={index}>
                                     {task}
                                     <button onClick={()=>editTask(index)}>Edit</button>
                                     <button onClick={()=>deleteTask(index)}>Delete</button>
                                 </li>
                             )
                         }
                     </ul>
                 )
             }
         </div>
     )

 }
 export default TodoList;

