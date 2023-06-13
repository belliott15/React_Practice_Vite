import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./State/data.js";
import NewUserForm from "./NewUserForm.jsx";

function App() {
  const [users, setUsers] = useState(data);

  useEffect(() => {
    const getUsers = async () => {
      setUsers(data.slice(1, 10));
    };
    getUsers();
  }, []);

  const handleNewUser = (user) => {
    console.log("function working", user);
    setUsers([user, ...users].slice(1, 10));
  };

  return (
    <div>
      <h1>User Display</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.first_name} {user.email}
        </p>
      ))}
      <section>
        <h1>create a new user</h1>
        <NewUserForm handleNewUser={handleNewUser} />
      </section>
    </div>
  );
}

export default App;
