import React, { useState } from "react";
import { addTodo, removeTodo } from "../features/Todo/todoSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";




function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div className="container my-4 d-flex justify-content-center ">
      <form onSubmit={handleTodoSubmit} class="row g-3">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="todoInput"
            placeholder="Todo list"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Add to Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todo;
