import React from "react";
import { TodoModel } from "../model/TodoModel";
import { TodoRowItem } from "./TodoRowItem";

export const TodoTable: React.FC<{
  todos: TodoModel[],
  deletetodo: Function
}> = (props) => {
    return (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope ='col'>#</th>
            <th scope ='col'>Descrption</th>
            <th scope ='col'>Assigned</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todo => (
            <TodoRowItem key = {todo.rowNum} rowNum = {todo.rowNum} rowDesc = {todo.rowDesc} rowAssign = {todo.rowAssign} 
              deletetodo = {props.deletetodo}/>
          ))}
        </tbody>
      </table>
    );
}