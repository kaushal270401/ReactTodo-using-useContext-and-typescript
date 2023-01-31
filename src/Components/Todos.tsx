import React, { useContext } from "react";
import TodoItems from "./TodoItem";
import classes from './Todos.module.css'
import {TodosContext} from '../store/todos-context'
const Todos: React.FC=()=>{
    const todoctx=useContext(TodosContext)
    
    return(
        <ul className={classes.todos}>
            {todoctx.items.map(item=> {
                return(
                    <TodoItems onremoveTodo={todoctx.removeTodo.bind(null,item.id)} key={item.id} text={item.text}/>
                )
            })}
        </ul>
    )
}
export default Todos;