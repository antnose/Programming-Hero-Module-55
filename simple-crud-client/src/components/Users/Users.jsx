import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
            {user.name} : {user.email} : {user._id}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default Users;
