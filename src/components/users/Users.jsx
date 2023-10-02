import { useState, useEffect } from "react";

import React from "react";
import UserName from "../userName/UserName";

const Users = () => {
  
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
    //   .then((data) => setUsers(data.map((user) => user.name)))
      .then((data) => setUserData(data))
      .catch(() => setError("Error fetching users"))
  }, []);
  return (
    <div>
      <UserName usdata = {userData} err = {error}/>
      <p>hello</p>
    </div>
  );
};

export default Users;
