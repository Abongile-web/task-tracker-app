import React from 'react'
import SingleTask from './SingleTask'


const Task = ({tasks}) => {
    return (
        
            <>
                {tasks.map((task) => (
                        <SingleTask task={task}/>
                ))}
            </>
            
    )
}

export default Task
