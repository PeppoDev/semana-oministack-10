import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import UserItem from "./components/UserItem";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  async function handleAddUser(data) {
    const response = await api.post("/users", data);
    setUsers([...users, response.data]);
  }

  return (
    <div className="app">
      <aside>
        <strong>Cadastro</strong>
        <UserForm onSubmit={handleAddUser} />
      </aside>

      <main>
        <ul>
          {users.map(user => {
            return <UserItem key={user._id} user={user} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
