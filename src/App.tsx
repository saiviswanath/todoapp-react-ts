import './App.css';
import { TodoTable } from './components/TodoTable';
import React, {useState} from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoModel } from './model/TodoModel';

export const App = () => {
  const baseTodos: TodoModel[] = [];
  baseTodos.push(new TodoModel(1, 'Write Book', 'User one'));
  baseTodos.push(new TodoModel(2, 'Read Book', 'User two'));

  const [todos, setTodos] = useState(baseTodos);

  const addTodo = (assigned: string, description: string) => {
    let rowNum = 0;
    if (todos.length > 0) {
      rowNum = todos[todos.length - 1].rowNum + 1;
    } else {
      rowNum = 1;
    }
    const newtodo = new TodoModel(rowNum, description, assigned)
    setTodos(todos => [...todos, newtodo]);
    
  }

  const deletetodo = (deletetodorownum: number) => {
    let filtered = todos.filter(function(value) {
      return value.rowNum !== deletetodorownum;
    });
    setTodos(filtered);
  }

  const [addnewtodoform, setAddnewtodoform] = useState(false);

  return (
    <div className='mt-5 container'>
     <div className='card'>
      <div className='card-header'>
        Your todo's
      </div>
      <div className='card-body'>
        <TodoTable todos={todos} deletetodo = {deletetodo}/>
        <button className='btn btn-primary' 
          onClick = {() => setAddnewtodoform(!addnewtodoform)}>{addnewtodoform ? 'close new todo' : 'add new todo'}</button>
        {addnewtodoform && <NewTodoForm addTodo = {addTodo}/>}
      </div>
     </div>
    </div>
  );
}
