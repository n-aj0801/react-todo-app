import { useState } from 'react'
import { TodoInputButton } from './TodoInputButton';



export function TodoInput(){
    const [todo, setTodo] = useState("");
    
    return(
        <>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <TodoInputButton onInputButton={  }/>
        </>
    );
}