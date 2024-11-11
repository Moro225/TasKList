import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons'
import { TaskItem } from "./TaskItem.jsx"
export const TaskList = (
  {  
    tasksList,
    editTask,
    deleteTask,
    taskCompleted
  }
) => {
  const taskList = tasksList.map((task) => (
    <TaskItem 
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ))
  if(taskList && taskList.length > 0){
    return (
      <div className="bg-gray-900 py-4 px-4 rounded-sm">
            {taskCompleted > 0 && (
              <h1 className="text-xl mb-4 font-bold">
                Il te reste <span className='bg-blue-700 py-0 px-2 rounded-md'>{taskCompleted}</span> tâches à accomplir
              </h1>
            )}
            {taskCompleted === 0 && (
              <h1 className="text-xl mb-4 font-semibold text-green-500">
                Génial ! Vous avez accompli toutes vos tâches <span><FontAwesomeIcon icon={faFaceSmileWink} /></span>
              </h1>
            )}
              {tasksList && tasksList.length > 0 && (
                <ul>
                  {taskList}
                </ul>
              )}
      </div>
    )
  }else {
    return(
      <div className='bg-gray-900 py-4 px-4 rounded-sm'>
        <h2 className='text-xl mb-4'>
          Vous n'avez aucune tâche en attente <span> <FontAwesomeIcon icon={faFaceSmile} /></span>
        </h2>
      </div>
    )
  }
}
