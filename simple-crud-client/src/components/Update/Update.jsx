import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    // console.log(name, email);

    fetch(`http://localhost:3001/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
        }
      });
  };
  return (
    <div>
      <h3>Update information of</h3>
      <form onSubmit={handleUpdate}>
        <input
          className="bg-amber-50 rounded my-3 p-1 text-black"
          type="text"
          name="name"
          placeholder="name"
          defaultValue={loadedUser?.name}
        />
        <br />
        <input
          className="bg-amber-50 rounded p-1 text-black "
          type="text"
          name="email"
          placeholder="email"
          defaultValue={loadedUser?.email}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
