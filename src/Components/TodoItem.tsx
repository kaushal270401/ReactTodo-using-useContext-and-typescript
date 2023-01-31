import React from 'react';
import classes from './TodoItem.module.css'

const TodoItems: React.FC<{text:string,onremoveTodo:()=>void }>=(props)=>{
    return<li className={classes.item} onClick={props.onremoveTodo}>{props.text}</li>
}
export default TodoItems;