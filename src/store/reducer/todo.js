const initialState = {
    todos: []
}

const todo = (state = initialState, action) => {
    switch(action.type){
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    id:Math.random()
                }]
            }
        default :
            return state
    }
}

export default todo;