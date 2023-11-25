import React, { useState } from "react";
import { addTodo, removeTodo } from "../features/Todo/todoSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";




function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos=useSelector((state)=>state.todos)
    console.log(todos,'sdsdsd')

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };


  return (
   <>
    <h2 className="text-center my-4">Redux Todo App</h2>
    <div className="container my-4 d-flex justify-content-center ">
    
      <form onSubmit={handleTodoSubmit} className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="todoInput"
            placeholder="Todo list"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add to Todo
          </button>
        </div>
        
        

      </form>
      </div>
      <div className="text-center h-50">
      <p>Todo List</p>
      {todos.map((todo)=>(<div key={todo.id} className="col g-3  p-3 my-2" style={{backgroundColor:"indigo",color:"white"}}>{todo.text}</div>))}
      
      </div>
    </>
  );
}

export default Todo;
