import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// react hooks, redux, mobx
const User = () => {
  const params = useParams();
  const [queryParams] = useSearchParams();
  //   console.log(queryParams.get("username"));
  const [isClicked, setIsClicked] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      username: "john123123",
    },
    {
      id: 2,
      name: "Random",
      username: "random123",
    },
    {
      id: 3,
      name: "asdasd",
      username: "someone1234",
    },
  ]);
  useEffect(() => {
    console.log(`Users: `, users);
  }, [users]);
  return (
    <>
      <h1>
        User Detail of ID: {params.id} and Username:{" "}
        {queryParams.get("username")}
      </h1>
      <button
        onClick={() => {
          setUsers((prevState) => [
            ...prevState,
            { username: "newuser1234", id: 5, name: "New User" },
          ]);
          setIsClicked((prevState) => !prevState);
        }}
      >
        Click Me
      </button>
      <span>{isClicked === true ? "Button is clicked" : "Unclicked"}</span>
      <div>
        <h2>List Users</h2>
        <div>
          {users.map((user) => (
            <>
              <div>
                User: {user.name}
                ID: {user.id}
                Username: {user.username}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
