import React from 'react'
import './style/style.scss';
import TodoItem from './components/TodoItem';
import { connect } from 'react-redux';
import AddTodos from './components/AddTodo';
const Todo = ({todos}) => {

    return (
        <>
    <div className="container">
        <AddTodos/>
        <div className="todoItem">
         {
            todos.map(item => (
                <TodoItem title={item.title}/>
            ))
         }
        </div>
        </div>
        </>
    
    )
}

const mapStateToProps = (state) => ({
    todos: state.todo.todos
})

export default connect (mapStateToProps) (Todo);
