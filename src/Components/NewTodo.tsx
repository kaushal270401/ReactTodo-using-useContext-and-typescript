
import classes from './NewTodo.module.css'
import React, { useRef ,useContext } from "react";
import { TodosContext } from '../store/todos-context';
const NewTodo: React.FC = () => {
   
  const todoctx=useContext(TodosContext)
  
  const inputRef=useRef<HTMLInputElement>(null)


    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enterText =inputRef.current!.value

        if(enterText.trim().length===0){
            alert('please enter a valid input')
            return;
        }

        todoctx.addTodo(enterText)
    }
   

  return( 
  <form onSubmit={submitHandler} className={classes.form} > 
    <label htmlFor="text">Task</label>
    <input type="text" id="text" ref={inputRef} />
    <button>Add todo</button>
  </form>
  );
};

export default NewTodo;
