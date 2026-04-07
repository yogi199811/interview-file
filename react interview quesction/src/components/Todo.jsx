import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState("all");  
// values: "all" | "active" | "completed"


  useEffect(() => {
    const oldtodos = localStorage.getItem("todo");
    if (oldtodos) {
      setTodos(JSON.parse(oldtodos));
    }

    console.log("work", oldtodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);

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
          isCompleted: false,
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

  const handleComplete = (id) => {
    let findtodo = todos.find((val) => val.id === id);

    console.log("find", findtodo);
    if (findtodo) {
    }

    setTodos((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, isCompleted: !val.isCompleted } : val,
      ),
    );
  };


  const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.isCompleted;
  if (filter === "completed") return todo.isCompleted;
  return true; // "all"
});

  return (
    <>
      <div className=" w-full pb-12 m-8 h-full flex justify-center flex-col items-center">
        <h1>Todo List</h1>
        <div className="flex gap-4 mt-4">
  <button
    onClick={() => setFilter("all")}
    className={filter === "all" ? "font-bold underline" : ""}
  >
    All
  </button>

  <button
    onClick={() => setFilter("active")}
    className={filter === "active" ? "font-bold underline" : ""}
  >
    Active
  </button>

  <button
    onClick={() => setFilter("completed")}
    className={filter === "completed" ? "font-bold underline" : ""}
  >
    Completed
  </button>
</div>

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
          {filteredTodos.map((val, idx) => (
            <ul className="p-3 flex justify-center w-fit" key={val.id}>
              <li
                className={`bg-gray-300 p-2 ${
                  val.isCompleted ? "line-through text-gray-500 opacity-70" : ""
                }`}
              >
                <input
                  checked={val.isCompleted}
                  onChange={() => handleComplete(val.id)}
                  className="bg-red-600"
                  type="checkbox"
                />
                {val.text}{" "}
                <button onClick={() => handleDelete(val.id)}>❌</button>{" "}
                <button onClick={() => handleEdit(val.id)}>✏️</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
