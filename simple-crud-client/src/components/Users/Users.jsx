import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <>
      <div>{users.length}</div>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
};

export default Users;
