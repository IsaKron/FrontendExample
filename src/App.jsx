import { useState, useEffect } from "react";
import "./css/main.scss";
import Navigation from "./components/Navigation.jsx";
import ToDosContainer from "./components/ToDosContainer.jsx";
import DonesContainer from "./components/DonesContainer.jsx";

// const URI = "http://localhost:3000/tasks";
const URI = "https://backendexample-7msy.onrender.com/tasks";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  const addItem = (value) => {
    const newTask = { text: value };

    fetch(URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => setItems([data, ...items]))
      .catch((error) => console.error(error));
  };

  const updateItem = (id) => {
    const updatedTask = items.find((item) => item._id === id);
    updatedTask.done = !updatedTask.done;

    fetch(URI + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(URI)
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  
  const deleteItem = (id) => {
    fetch(URI + `/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetch(URI)
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const toDos = items.filter((el) => !el.done);
  const toDones = items.filter((el) => el.done);

  const getCookie = () => {
    fetch(URI + `/getCookie`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="app">
      <button onClick={getCookie}>Get Cookie</button>
      <Navigation></Navigation>
      <ToDosContainer
        items={toDos}
        handleChange={updateItem}
        handleAddTodo={addItem}
        handleDelete={deleteItem}
      ></ToDosContainer>
      <DonesContainer
        items={toDones}
        handleChange={updateItem}
        handleDelete={deleteItem}
      ></DonesContainer>
    </div>
  );
}

export default App;
