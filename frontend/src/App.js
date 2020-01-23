import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [users, setUsers] = useState([]);

  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongintude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongintude(longitude);
      },
      err => {
        console.warn(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");
      setUsers(response.data);
    }
    loadUsers();
  }, []);
  async function handleAddUser(e) {
    e.preventDefault();

    const response = await api.post("/users", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username("");
    setTechs("");
    // setUsers([...users, response.data]);
    console.log(users);
  }

  return (
    <div className="app">
      <aside>
        <strong>Cadastro</strong>
        <form onSubmit={handleAddUser}>
          <div className="inputblock">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            ></input>
          </div>
          <div className="inputblock">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>

          <div className="inputgroup">
            <div className="inputblock">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>

            <div className="inputblock">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongintude(e.target.value)}
              ></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          {users.map(user => {
            return (
              <li key={user._id} className="dev-item">
                <header>
                  <img
                    src={user.avatar_url}
                    alt={user.name ? user.name : user.login}
                  />
                  <div className="user-info">
                    <strong>{user.name ? user.name : user.login}</strong>
                    <span>{user.techs.join(", ")} </span>
                  </div>
                </header>

                <p>{user.bio ? user.bio : "Bio não cadastrada"}</p>
                <a href={`https://github.com/user/${user.login}`}>
                  Acessar perfil no GitHub
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
