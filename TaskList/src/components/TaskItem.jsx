import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCheck } from '@fortawesome/free-solid-svg-icons'
export const TaskItem = ({task, editTask, deleteTask}) => {
  return (
    <li className={`flex flex-row justify-between m-2 bg-gray-950 rounded-md py-1 px-2 ${task?.isDone ? 'bg-green-500' : ' bg-gray-950'}`}>
        <div className="flex flex-row gap-8 items-center">
          <div className={`${task?.isDone ? 'bg-green-500 py-1 px-2 rounded-full' : 'bg-black py-1 px-2 rounded-full'}`}>
            {task.id}
          </div>
          <div className={`${task?.isDone ? 'line-through' : ' bg-gray-950'}`}>
            {task.title}
          </div>
        </div>
        <div className='buttonCheckDelete'>
          <button className={`bg-black py-1 px-2 mr-2 rounded-md ${task?.isDone ? 'hidden' : ' bg-black'}`} onClick={() => editTask(task.id, !task.isDone)}>
            <FontAwesomeIcon className='text-green-500' icon={faCheck} />
          </button>
          <button className='bg-black py-1 px-2 rounded-md' onClick={(e) => {
            e.stopPropagation()
            deleteTask(task.id)
          }}>
            <FontAwesomeIcon className='text-red-500' icon={faTrash} />
          </button>
        </div>
    </li>
  )
}
