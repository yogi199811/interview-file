import express, { json, urlencoded } from "express";
import { v4 as uuid } from "uuid";

const users = [
  {
    name: "yogi",
    id:uuid(),
    email: "yogesh@gmail.com ",
  },
];
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.post("/register", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(403).json({
      message: "Name or Email is require",
    });
  }

  const newuser = {
    id: uuid(),
    name,
    email,
  };

  users.push(newuser);

  res.status(200).json({
    message: "User register successfully",
    newuser,
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  return res.status(200).json({
    message: "User deleted successfully",
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const {name,email} = req.body


  console.log(name,email);
  

  
  if (!id) return;
  
  const getUser = users.find((user) => user.id === id);
  
  if(name) getUser.name = name
  if(email) getUser.email = email
  console.log(getUser)
  
  res.status(201).json({
    message:"user updated Successfullyy",
    getUser
  })
});

app.use((err, req, res, next) => {
  console.log("error part", err);
  res.status(500).json({
    success: false,
    message: "something went wrong from server",
  });
});

app.listen(PORT || 3000, (req, res) => {
  console.log(`Server is listing on port${PORT}`);
});
