import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('PLease add a task')
            return
        }

        onAdd({text, day})

        setText('')
        setDay('')
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Task:</h4>
            <input type='text' placeholder='Enter task description' value={text} onChange={(e) => setText(e.target.value)}></input>
            <br></br>
            <h4>Date and Time:</h4>
            <input type='text' placeholder='Enter date and time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            <br></br>
            <button type='submit'>Save Task</button>
        </form>
    )
}

export default AddTask
