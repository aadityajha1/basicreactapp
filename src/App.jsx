import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import UserAdd from "./components/UserAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Home Page</h1>
      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/add" element={<UserAdd />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </>
  );
}

export default App;
