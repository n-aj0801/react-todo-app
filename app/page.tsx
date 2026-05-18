'use client'

import type { Todo } from '../types/todo';
import { useEffect, useState } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { createClient } from '../lib/supabase/client';


function Page () {
  const supabase = createClient();
  const [todoItems, setTodoItems ] = useState<Todo[]>([]);
  
  const addTodo = async(todoValue:string)=>{
    const { data, error } = await supabase
      .from('todos')
      .insert({ text: todoValue, completed: false, user_id: user.id })
      .select();
    if(data){
      const newTodo:Todo = data[0];
      setTodoItems([...todoItems,newTodo]);
    }
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

  useEffect(()=>{
    const fetchData = async ()=>{
      const { data, error: dbError } = await supabase.from('todos').select('*');
      if(data){setTodoItems(data);}
      const { data: { user }, error: authError } = await supabase.auth.getUser();
    }
    fetchData();
  },[]);
  
  
  return (
    <div>
      <h1>Todoリスト</h1>
      <TodoInput onInputButton={(todoValue:string)=>addTodo(todoValue)}/>
      <TodoList todoItems={todoItems} onDeleteButton={deleteTodo} onCheckBox={switchTodo}/>
    </div>
  );
}
export default Page

