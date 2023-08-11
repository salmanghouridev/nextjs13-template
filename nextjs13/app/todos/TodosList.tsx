import React from "react";
import {Todos} from '@/typings'

const fetchtodos = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
          const todos: Todos[] = await res.json()
          return todos
          }
async function TodosList() {
const todos = await fetchtodos();
  return (
   <>
    {todos.map((todo) => (
      <div key={todo.id}>
        <p>{todo.title}</p>
      </div>
    ))}
    
   </>
  );
}
export default TodosList;