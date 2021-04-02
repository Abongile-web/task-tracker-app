import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
// import ClearTasks from './components/ClearTasks'
import {useState} from 'react'



function App() {
  // Toggle add tasks
  const [showAdd, setShowAdd] = useState(false)

  //Store Tasks
  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Delete all Tasks
  // const clearAll = () => {
  //   console.log('clear')
  //   setTasks([])
  // }

  return (
    <div className='container'>
      <div className="view">
        <Header onAdd={() => setShowAdd(!showAdd)} show={showAdd}/>

      <div className="allTasks">
        {/* if show add is true */}
        {showAdd && <AddTask onAdd={addTask} />} 

        <Task tasks={tasks} onDelete={deleteTask}/>
      </div>

        {/* <ClearTasks clearTasks={clearAll} /> */}
      </div>
    </div>
  );
}

export default App;
