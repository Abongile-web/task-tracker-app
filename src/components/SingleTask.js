import React from 'react'
import {FaTimes} from 'react-icons/fa'

const SingleTask = ({task, onDelete}) => {
    return (
        <div className='task'>
            <div className='task-details'>
                <h4>{task.text}</h4>
                <p>{task.day}</p>
            </div>

            <div className='task-close'>
                <p onClick={() => onDelete(task.id)}><FaTimes /></p>
            </div>
        </div>
    )
}

export default SingleTask
