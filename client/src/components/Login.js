import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log("logged in successs: ", res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log("failed to login: ", err);
      });
  };

  return (
    <div className="login-form">
      <form name="login">
        <div className="login-input-container">
          <lable htmlFor="username">Username</lable>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="login-input-container">
          <lable htmlFor="password">password</lable>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
