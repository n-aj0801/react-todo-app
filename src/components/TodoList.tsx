import type { Todo } from "../types/Todo";
import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

type TodoListProps = {
  todoItems: Todo[];
  onDeleteButton: (todoId: number)=> void;
  onCheckBox: (todoId: number)=> void;
};

export function TodoList({ todoItems, onDeleteButton, onCheckBox }: TodoListProps) {
  const [filter, setFilter] = useState("all");
  const filteredList = todoItems.filter((todoItem)=>{
    if(filter === "completed") return todoItem.completed;
    if(filter === "uncompleted") return !todoItem.completed;
    return true;
  });
  
  return (
    <>
    <select value={filter} onChange={(e)=>{setFilter(e.target.value)}}>
      <option value="all">すべて</option>
      <option value="completed">完了</option>
      <option value="uncompleted">未完了</option>
    </select>
    <ul>
      {filteredList.map((todoItem) => (
        <li key={todoItem.id}>
          {todoItem.text}
          <input type="checkbox" checked={todoItem.completed} onChange={()=>onCheckBox(todoItem.id)}/>
          <DeleteButton onDeleteButton={()=>onDeleteButton(todoItem.id)}/>
        </li>
      ))}
    </ul>
    </>
  );
}