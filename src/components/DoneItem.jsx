function ToDoneItem({ item, onStatusChange, onDelete }) {
  return (
    <div className="todones-item">
      <p>{item.text}</p>
      <div className="actions">
        <button className="btn" onClick={() => onStatusChange(item._id)}>
          &#8635;
        </button>
        <button className="btn" onClick={() => onDelete(item._id)}>
          &#142;
        </button>
      </div>
    </div>
  );
}

export default ToDoneItem;
