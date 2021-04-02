import React from 'react'
import SingleTask from './SingleTask'


const Task = ({tasks, onDelete}) => {
    return (
        
            <>
                {tasks.map((task) => (
                        <SingleTask task={task} onDelete={onDelete}/>
                ))}
            </>
            
    )
}

export default Task
