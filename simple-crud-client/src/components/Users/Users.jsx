import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:3001/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <>
      <div>{users.length}</div>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>x</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default Users;
