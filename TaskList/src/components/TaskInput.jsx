import { useState } from "react"

export const TaskInput = ({addTask}) => {
  const [taskTitle, setTaskTitle] = useState('')
  const handleChange = (e) => {
    setTaskTitle(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
    if(taskTitle.trim()){
      addTask(taskTitle);
      setTaskTitle('')
    }else{
      console.log('Vous n\'avez renseigner aucun titre de tâche !')
    }
  }
    return (
      <div className="mt-16 mb-8 bg-gray-900 rounded-md	 py-8 px-4 shadow-2xl shadow-gray-950">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label htmlFor="" className="text-xl text-gray-50">Ajoute ta prochaine tâche</label>
              <div className="flex flex-row items-center justify-between">
              <input 
                value={taskTitle}
                className="h-10 bg-slate-200 text-gray-800 p-2 px-4 w-3/4 outline-none focus:outline-none focus:ring focus:ring-gray-300"
                type="text" 
                placeholder="Indiquez un titre de tâche..." 
                onChange={handleChange}
              />
              <button type="submit" className="border-solid border-2 border-gray-300 p-2 rounded-md hover:bg-slate-300 hover:text-gray-950 hover:duration-500">AJOUTER</button>
              </div>
          </form>
      </div>
    )
  }