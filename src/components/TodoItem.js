import React from 'react'

const TodoItem = ({title}) => {
    return (
        <>
        <div className="item">
                <p className="title">{title}</p>    
                <div className="delete">x</div>
        </div>
        </>
    )
}

export default TodoItem;
