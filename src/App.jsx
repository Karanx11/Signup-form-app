import React, { useState } from "react";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleRegister = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <SignUpForm onRegister={handleRegister} />
        {users.length > 0 && <h2 className="registered-users">Registered Users</h2>}
        <div className="user-list">
          {users.map((user, index) => (
            <UserCard key={index} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
