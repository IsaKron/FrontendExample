import DoneItem from "./DoneItem.jsx";

function DonesContainer({ items, handleChange, handleDelete }) {
  const toDonesItems = items.map((el) => {
    return (
      <DoneItem
        item={el}
        key={el._id}
        onStatusChange={handleChange}
        onDelete={handleDelete}
      ></DoneItem>
    );
  });

  return (
    <div className="todones-container">
      <h3>DONE</h3>
      {items.length > 0 && toDonesItems}
    </div>
  );
}

export default DonesContainer;
