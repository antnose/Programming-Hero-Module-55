import { use, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("Users Added successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Outlet />
    </>
  );
}

export default App;
