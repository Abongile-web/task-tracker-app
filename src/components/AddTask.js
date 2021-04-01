import React from 'react'

const AddTask = () => {
    return (
        <form>
            <input type='text' placeholder='Enter task description'></input>
            <br></br>
            <input type='text' placeholder='Enter date and time'></input>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddTask
