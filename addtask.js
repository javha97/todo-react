import React from "react";
import Singletodo from "./singletodo";
function Addtask({ todo, settodo }) {
    return (
        <div className="flex">
            {todo.map((element, index) => {
                return <Singletodo key={index} text={el.text} settodo={settodo} todo={todo} td={element} />
            })}
        </div>
    )
}
export default Addtask;