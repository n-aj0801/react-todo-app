import { useState } from 'react'
import { TodoInputButton } from './TodoInputButton';

type TodoInputProps = {
  onInputButton: (value:string)=> void;
}

export function TodoInput(props: TodoInputProps) {
    const [value, setValue] = useState('');
    const onInputButton = (value:string)=> {
        props.onInputButton(value);
    }
  return (
    <>
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <TodoInputButton onInputButton={()=>onInputButton(value)}/>
    </>
  );
}