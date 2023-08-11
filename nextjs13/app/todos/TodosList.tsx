import React from "react";
import {Todos} from '@/typings'
import Link from "next/link";

const fetchtodos = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
          const todos: Todos[] = await res.json()
          console.log(todos)
          return todos

          }
async function TodosList() {
const todos = await fetchtodos();
  return (
   <>
    {todos.map((todo) => (
      <div key={todo.id}>
       <Link href={`/todos/${todo.id}`}>
        {todo.title}</Link>
      </div>
    ))}
    
   </>
  );
}
export default TodosList;