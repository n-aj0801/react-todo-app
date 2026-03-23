import type { Todo } from './types/todo'
import { useState } from 'react';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList';

 function App() {
  const [todoItems, setTodoItems ] = useState<Todo[]>([]);
  const inputTodoItem = (todoItem:Todo)=>{
    setTodoItems([...todoItems,todoItem]);
  }
  return (
    <div>
      <h1>Todoリスト</h1>
      <TodoInput onInputButton={(todoItem)=>inputTodoItem(todoItem)}/>
      <TodoList todoItems={todoItems} />
    </div>
  );
}
export default App

