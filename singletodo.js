import React from "react";
function Singletodo({ text, todo, td, settodo }) {
    const Delete = () => {
        settodo(todo.filter((el) =>
            el.id !== td.id
        ))
    }
    console.log(todo);
    return (
        <div className="flex1">
            <div>{text}</div>
            <button onClick={Delete}>X</button>
        </div>
    )
}
export default Singletodo;
