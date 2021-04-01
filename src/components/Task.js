import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = () => {
    return (
        <div className='task'>
            <div className='task-details'>
                <h3>Description of task</h3>
                <p>Date and time</p>
            </div>

            <div className='task-close'>
                <p><FaTimes /></p>
            </div>
        </div>
    )
}

export default Task
