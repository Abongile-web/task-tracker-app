import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
import ClearTasks from './components/ClearTasks'

function App() {

  return (
    <div className='container'>
      <div className="view">
        <Header />

        <AddTask />

        <Task />

        <ClearTasks />
      </div>
    </div>
  );
}

export default App;
