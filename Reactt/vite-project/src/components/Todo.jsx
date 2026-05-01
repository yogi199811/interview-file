import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todo")) || []);
  }, []);
  useEffect(() => {
  if (todos.length > 0) {
    localStorage.setItem("todo", JSON.stringify(todos));
  }
}, [todos]);


  const handleCLick = () => {
    try {
      if (newTodo.trim() === "") {
        return alert("please add values");
      }

      if (editTodo !== null) {
        const updatedTodo = todos.map((val, idx) =>
          idx === editTodo ? newTodo : val,
        );
        setTodos(updatedTodo);
        setEditTodo(null);
      } else {
        setTodos((prev) => [...prev, newTodo]);
      }

      setNewTodo("");
      localStorage.setItem("todo", todos);
    } catch (error) {
      console.log("error ::", error);
    }
  };

  const handleDelete = (idx) => {
    setTodos(todos.filter((val, index) => index !== idx));
    alert("todo deleted");
  };

  const handleEdit = (value, idx) => {
    setNewTodo(value);
    setEditTodo(idx);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="enter text here"
          style={{ border: "2px solid red" }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
        />
        <br />
        <button
          style={{ border: "3px solid black" }}
          type="submit"
          onClick={handleCLick}
        >
          {" "}
          {editTodo !== null ? "Update Todo" : "Add Todo"}
        </button>
        <br />
        <div>
          {todos.map((val, idx) => (
            <ul key={idx}>
              <li>
                {val}
                <button onClick={() => handleEdit(val, idx)}>✏️</button>
                <button onClick={() => handleDelete(idx)}>❌</button>{" "}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
