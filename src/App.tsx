import type { Todo } from './types/Todo';
import { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [todoItems, setTodoItems ] = useState<Todo[]>([]);
  const addTodo = (todoValue:string)=>{
    const newTodo:Todo = {
        id:Date.now(),
        text:todoValue,
        completed:false
    };
    setTodoItems([...todoItems,newTodo]);
  }

  const deleteTodo = (todoId: number)=>{
    const newTodoItems: Todo[] 
    = todoItems.filter((todoItem)=>{return todoItem.id !== todoId;});
    setTodoItems(newTodoItems);
  }

  const switchTodo = (todoId: number)=>{
    const newTodoItems: Todo[]
    = todoItems.map((todoItem)=>{
      if(todoItem.id === todoId){ 
        return{...todoItem, completed: !todoItem.completed};
      }
      return todoItem;
    });
    setTodoItems(newTodoItems);
  }
  
  
  return (
    <div>
      <h1>Todoリスト</h1>
      <TodoInput onInputButton={(todoValue:string)=>addTodo(todoValue)}/>
      <TodoList todoItems={todoItems} onDeleteButton={deleteTodo} onCheckBox={switchTodo}/>
    </div>
  );
}
export default App

