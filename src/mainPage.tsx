import React, { useState } from 'react'
import './App.css'
import InputField from './Components/InputField';
import { Todo } from './model'
import TodoList from './Components/TodoList';

const Main: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todo)

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
      console.log(todos)
    }
  }
  return (
    <div className='App'>
      <span className='Heading'>Taskify By Obi</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Main;
