import React from 'react'

const Header = ({onAdd, show}) => {
    return (
        <header>
            <h1>My Tasks</h1>
            <button onClick={onAdd} >{show ? 'Close' : 'Add'}</button>
        </header>
    )
}

export default Header
