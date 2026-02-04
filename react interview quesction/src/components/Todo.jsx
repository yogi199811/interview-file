import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const oldtodos = localStorage.getItem("todo");
    if(oldtodos){

        setTodos(JSON.parse(oldtodos));
    }

    console.log("work",oldtodos);
  }, []);

  useEffect(()=>{
    if(todos.length>0){

        localStorage.setItem('todo',JSON.stringify(todos))
    }
  },[todos])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo !== null) {
      console.log("i am true");
      setTodos((prev) =>
        prev.map((val) =>
          val.id === editTodo ? { ...val, text: addTodo } : val,
        ),
      );
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: addTodo,
        },
      ]);
    }
    // localStorage.setItem("todo", JSON.stringify(todos));

    console.log("todos", todos);
    setAddTodo("");
  };

  const handleDelete = (todoId) => {
    setTodos((prev) => prev.filter((val) => val.id !== todoId));
  };

  const handleEdit = (editId) => {
    let editTodo = todos.find((val) => val.id === editId);

    setAddTodo(editTodo.text);
    setEditTodo(editTodo.id);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input
          value={addTodo}
          type="text"
          onChange={(e) => setAddTodo(e.target.value)}
        />

        <button onClick={handleSubmit} type="submit">
          {" "}
          Click{" "}
        </button>
      </form>

      <div>
        {todos.map((val, idx) => (
          <ul key={val.id}>
            <li>
              {val.text}{" "}
              <button onClick={() => handleDelete(val.id)}>❌</button>{" "}
              <button onClick={() => handleEdit(val.id)}>✏️</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Todo;
