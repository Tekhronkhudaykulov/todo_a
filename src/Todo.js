import React from 'react'
import './style/style.scss';
import TodoItem from './components/TodoItem';
import { connect } from 'react-redux';
import AddTodos from './components/AddTodo';
import { deleteTodo } from './store/action/todo';
const Todo = ({todos, deleteTodo}) => {

    return (
        <>
    <div className="container">
        <AddTodos/>
        <div className="todoItem">
         {
            todos.map(item => (
                <TodoItem title={item.title}
                deleteTodo = {() => deleteTodo(item.id)}
                />
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
const mapDispatchToProps = ({
    deleteTodo
})

export default connect (mapStateToProps,mapDispatchToProps) (Todo);
