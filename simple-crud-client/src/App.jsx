import { use, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

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
        <input
          type="text"
          name="name"
          className="bg-amber-50 text-black p-1 rounded mt-4"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          className="bg-amber-50 text-black my-3 p-1 rounded"
          placeholder="Email"
        />
        <br />
        <button type="submit" value="Add User">
          Add User
        </button>
      </form>

      <Link to="/users">
        <button>user</button>
      </Link>
      <Outlet />
    </>
  );
}

export default App;
