import React, { useState } from 'react'
import { handleAdd } from '../React-Redux/Counter/action';

function TodoInput({addTodo}) {
    const[text,setText]=useState('');

    const handleAdd =()=>{
      addTodo(text);
      setText("")

    }

  return (
   <>
   <input value={text} onChange={(e)=>setText(e.target.value)} />
   <button onClick={handleAdd}>Add todo</button>
   </>
  )
}

export default TodoInput