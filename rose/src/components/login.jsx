import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

const Login = () => {
  const navigate = useNavigate();
  const loginstyle = {
    height: "170px",
    width: "170px",
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9002/login", user)
      .then(result => {
        if (result.data.message === "success") {
          localStorage.setItem("userName", result.data.user.name);
          navigate("/home");
        } else {
          setError(result.data.message);
        }
      })
      .catch(err => {
        console.log(err);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="body">
      <div className="bggrey">
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className="login" style={loginstyle}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBx">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="inputBx">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="button sub" ><button type="submit">Login</button></div>
              <div className="links">
                <div className="a" onClick={() => navigate("/signup")}>Signup</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
