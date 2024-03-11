import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDosContainer({ items, handleChange, handleAddTodo, handleDelete }) {

  const [value, setValue] = useState("");

  const handleNewTodoChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(value);
    setValue("");
  };

  const toDoItems = items.map((el) => {
    return (
      <ToDoItem
        item={el}
        key={el._id}
        onStatusChange={handleChange}
        onDelete={handleDelete}
      ></ToDoItem>
    );
  });

  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="input-item">
          <input
            type="text"
            name="todo"
            value={value}
            onChange={handleNewTodoChange}
          />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {items.length > 0 && toDoItems}
      </div>
    </div>
  );
}

export default ToDosContainer;
