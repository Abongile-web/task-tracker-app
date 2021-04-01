import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
import ClearTasks from './components/ClearTasks'
import {useState} from 'react'

function App() {
  // Toggle add tasks
  const [showAdd, setShowAdd] = useState(false)

  return (
    <div className='container'>
      <div className="view">
        <Header onAdd={() => setShowAdd(!showAdd)} show={showAdd}/>

      <div className="allTasks">
        {/* if show add is true */}
        {showAdd && <AddTask />} 

        <Task />
      </div>

        <ClearTasks />
      </div>
    </div>
  );
}

export default App;
