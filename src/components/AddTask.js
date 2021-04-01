import React from 'react'

const AddTask = () => {
    return (
        <form>
            <h4>Task:</h4>
            <input type='text' placeholder='Enter task description'></input>
            <br></br>
            <h4>Date and Time:</h4>
            <input type='text' placeholder='Enter date and time'></input>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddTask
