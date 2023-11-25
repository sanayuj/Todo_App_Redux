import React from 'react'

function Todo() {
  return (
    <div className='container my-4 d-flex justify-content-center ' ><form class="row g-3">
   
    <div class="col-auto">
      <input type="text" class="form-control" id="todoInput" placeholder="Todo list"/>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Add to Todo</button>
    </div>
  </form></div>
  )
}

export default Todo