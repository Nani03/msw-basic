import React from "react";
import Users from "../users/Users";


const UserName = ({usdata, err}) => {
  return (
    <div>
      <h1>Users</h1>
      {err && <p>{err}</p>}
      <ul>
        {usdata.map((user) => (
          <li key={user.name}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserName;
