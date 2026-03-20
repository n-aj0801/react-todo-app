import { useState } from 'react';
import { TodoInput } from './components/TodoInput'

function App() {
    const TodoList = [];
    const InputTodoList = TodoList.map()
    return(
        <>
        <h1>Todoリスト</h1>
        <TodoInput />
        </>
    ); 
}

export default App

