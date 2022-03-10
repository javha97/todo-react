import React from 'react';
function Task({ task, settask, todo, settodo }) {
    const ClickBtn = (e) => {
        settodo([
            ...todo, { text: task, completed: false, id: Math.random() * 1000 }
        ])
        settask('')
    }
    const Onchng = (e) => {
        settask(e.target.value)
    }
    return (
        <div className='flex1'>
            <input value={task} onChange={Onchng} placeholder='add thing to todo...'></input>
            <button onClick={ClickBtn}>Add</button>
        </div>
    )
}
export default Task