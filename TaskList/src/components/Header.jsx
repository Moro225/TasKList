export const Header = () => {
    return (
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-50">My Task</h1>
          <p className="text-gray-400">Rester focus sur vos objectifs</p>
        </div>
        <div className="text-blue-600">
          <span className="text-gray-300 underline">Version:</span> v.1.0
        </div>
      </div>
    )
  }  