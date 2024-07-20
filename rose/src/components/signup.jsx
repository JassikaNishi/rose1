import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css"

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [error, setError] = useState("");
    const signupstyle = {
        height: "200px",
        width: "200px",

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.confirm_password) {
            setError("Passwords do not match");
            return;
        }
        axios.post("http://localhost:9002/signup", user)
            .then((result) => {
                if (result.data.message === "User already registered") {
                    setError(result.data.message); 
                } else {
                    localStorage.setItem("name", user.name);
                    navigate("/home");
                }
            })
            .catch((err) => {
                console.error("Signup failed:", err);
                setError("Signup failed. Please try again."); 
            });
    };

    return (
        <div className="main">
                <div className="body">
                <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="signup"style={signupstyle}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputBx">
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </div>
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
                <div className="inputBx">
                    <input
                        type="password"
                        name="confirm_password"
                        value={user.confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <button type="submit">Signup</button>
                <div hai><p>
                    Already have an account? <span className="login" onClick={() => navigate("/login")}>Login</span>
                    
                </p>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;
