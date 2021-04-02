import React from 'react'

const ClearTasks = ({ClearTasks}) => {
    return (
        <div className='clear'>
            <button onClick={ClearTasks}>Clear all tasks</button>
        </div>
    )
}

export default ClearTasks
