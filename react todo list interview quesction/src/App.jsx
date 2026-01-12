import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState([{
    name: "John",
    email:"no"
  }]);
  const [newuser, setNewuser] = useState({
    name: "",
    email: "",
  });

  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewuser({ ...newuser, [name]: value });
  };

  const clickHandle = (e) => {
    setUser([...user, newuser]);

    setNewuser({
      name: "",
      email: "",

    })
  };

  
  
  function deletehandle (index){
    setUser(user.filter((_, i) => i !== index));

  }


  return (
    <>
      <input type="text" value={newuser.name} name="name" onChange={change} />
      <br />
      <br />
      <input type="text" name="email" value={newuser.email} onChange={change} />

      <button onClick={clickHandle}>click</button>

      {user.map((item, i) => {
        return (
          <div  key={i}>
            <li>{item.name} || {item.email}  <button onClick={()=>deletehandle(i)}>❌</button> </li>
          </div>
        );
      })}
    </>
  );
};

export default App;
