import { useContext, createContext } from 'react'

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todos: 'Todo Task',
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export function useTodo() {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider