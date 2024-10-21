import React, { useState } from "react";
import "./register.css";

function register() {

  const [data, setData] = useState ({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const registerUser = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Password do not match");
      return;
    } else {
      console.log("Data submit", data);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <h1>Register Page</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name..."
          value={data.name} 
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password..."
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default register;
