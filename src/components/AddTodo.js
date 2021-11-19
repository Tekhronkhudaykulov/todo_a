import React, { useState } from 'react'
import { addTodo } from '../store/action/todo';
import { connect } from 'react-redux';

const AddTodos = ({addTodo}) => {
    const [value, setValue] = useState('');
    return (
    <div className="all_items">
        <h1>Add Todo</h1>
        <div className="input_button">
        <input type="text" 
        placeholder="add todo..."
        onChange={event => {
            setValue(event.target.value);
        }}
        value={value}
        onKeyDown={event => {
            if(event.keyCode === 13){
                addTodo(value)
                setValue('');
            }
        }}
        />
        <button>Add Todo</button>
        </div>
    </div>
    )
}

const mapDispatchToProps = ({
    addTodo
})
export default connect(null, mapDispatchToProps) (AddTodos);
