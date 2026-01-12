import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    age : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    
    console.log(user);
    setUser({
      username: "",
      email: "",
      password: "",
      age:""
    });
  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          value={user.username}
          name="username"
          type="text"
          onChange={handleChange}
          placeholder="name"
        />
        <br />
        <br />
        <br />
        <input
          onChange={handleChange}
          value={user.email}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
          type="password"
          placeholder="password"
        />
        <br />
        <br />
        <br />
        <label htmlFor="">Male</label>
        <input onChange={handleChange} value="Male" type="radio" name="age"  />

        <label htmlFor="">Female</label>
        <input onChange={handleChange} value="Female" type="radio" name="age"  />
        <br />
        <br />
        <br />
        <button type="submit">submit </button>
      </form>


      <p>{user.age}</p>
    </>
  );
};

export default App;
