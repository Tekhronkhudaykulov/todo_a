import React from 'react'

const TodoItem = ({title, deleteTodo}) => {
    return (
        <>
        <div className="item">
                <p className="title">{title}</p>    
                <div onClick={deleteTodo} className="delete">x</div>
        </div>
        </>
    )
}

export default TodoItem;
