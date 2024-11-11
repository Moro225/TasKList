import { TaskContainer } from "./TaskContainer"

export const Footer = ({taskNotCompleted}) => {
  if(taskNotCompleted){
    return (
      <footer className=" bg-gray-950 py-1 px-2 my-4 text-center">
          <code>
            {taskNotCompleted === 1 && (
            <>-- Vous avez terminer <span>{taskNotCompleted}</span> tâche --</>
            )}
            {taskNotCompleted > 1 && (
            <>-- Vous avez terminer <span>{taskNotCompleted}</span> tâches --</>
            )}
          </code>
      </footer>
    ) 
  }
  return null
}
