const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const roseModel = require('./models/roseModel'); 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/rose", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  roseModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "success", user: user }); 
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "User not found" });
      }
    })
    .catch(err => {
      console.error("Error during login:", err);
      res.json({ message: "Login failed" });
    });
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await roseModel.findOne({ email: email });
    if (user) {
      return res.json({ message: "User already registered" });
    }

    const newUser = new roseModel({
      name,
      email,
      password,
    });

    await newUser.save();
    res.json({ message: "Successfully signed up, please login now" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.json({ message: "Signup failed" });
  }
});

app.listen(9002, () => {
  console.log("Server is running on port 9002");
});
