import type { Todo } from "../types/todo";

type TodoListProps = {
  todoItems: Todo[];
};

export function TodoList({ todoItems }: TodoListProps) {
  return (
    <ul>
      {todoItems.map((todoItem) => (
        <li key={todoItem.id}>{todoItem.text}</li>
      ))}
    </ul>
  );
}