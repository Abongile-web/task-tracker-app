import React from 'react'
import {FaTimes} from 'react-icons/fa'

const SingleTask = ({task}) => {
    return (
        <div className='task'>
            <div className='task-details'>
                <h4>{task.text}</h4>
                <p>{task.day}</p>
            </div>

            <div className='task-close'>
                <p><FaTimes /></p>
            </div>
        </div>
    )
}

export default SingleTask
