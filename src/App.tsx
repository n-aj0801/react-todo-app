import type { Todo } from './types/todo'
import { useState } from 'react';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList';

 function App() {
  const [todoItems, setTodoItems ] = useState<Todo[]>([]);
  const addTodo = (todoValue:string)=>{
    const newTodo:Todo = {
        id:todoItems.length,
        text:todoValue,
        completed:false
    }
    setTodoItems([...todoItems,newTodo]);
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <TodoInput onInputButton={(todoValue:string)=>addTodo(todoValue)}/>
      <TodoList todoItems={todoItems} />
    </div>
  );
}
export default App

