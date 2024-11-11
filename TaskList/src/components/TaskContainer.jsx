import { Header } from "./Header.jsx"
import { TaskInput } from "./TaskInput.jsx"
import { TaskList } from "./TaskList.jsx"
import { Footer } from "./Footer.jsx"
import { useState } from "react"

export const TaskContainer = () => {
  const[tasksList, setTasksList] = useState([])

  const addTask=(title)=>{
    const newTask = {
      id: tasksList.length + 1,
      title: title,
      isDone: false
    }
    setTasksList([...tasksList, newTask])
  }

  const editTask = (id, itIsDone) =>{
    setTasksList(
      tasksList.map((task) => 
      task.id === id ? {...task, isDone: itIsDone} : task)
    )
  }

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id))
  }
  
  const taskCount = () => {
    const taskCompleted = tasksList.filter((task) => task.isDone === false ).length
    const taskNotCompleted = tasksList.length - taskCompleted
    return {taskCompleted, taskNotCompleted}
  }
  const {taskCompleted, taskNotCompleted} = taskCount()
  console.log(taskCompleted, taskNotCompleted)

  return (
    <main>
        <Header />
        <TaskInput addTask={addTask}/>
        <TaskList 
          tasksList={tasksList}
          editTask={editTask}
          deleteTask={deleteTask}
          taskCompleted={taskCompleted}
        />
        <Footer taskNotCompleted={taskNotCompleted}/>
    </main>
  )
}
