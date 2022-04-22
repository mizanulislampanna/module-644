const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Look mama I Can Code Now he he he a");
});
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0178384849" },
  { id: 2, name: "Shabnur", email: "shabnur@gmail.com", phone: "0178384849" },
  {
    id: 3,
    name: "suchorita",
    email: "suchorita@gmail.com",
    phone: "0178384849",
  },
  { id: 4, name: "suchonda", email: "suchonda@gmail.com", phone: "0178384849" },
  { id: 5, name: "sabila", email: "sabila@gmail.com", phone: "0178384849" },
  { id: 6, name: "srabonti", email: "srabonti@gmail.com", phone: "0178384849" },
  { id: 7, name: "Sokhina", email: "sokhina@gmail.com", phone: "0178384849" },
];
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const mached = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(mached);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id == id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("listening to port");
});
