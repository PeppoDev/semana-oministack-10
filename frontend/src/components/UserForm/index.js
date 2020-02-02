import React, { useState, useEffect } from "react";

function UserForm({ onSubmit }) {
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

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username("");
    setTechs("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default UserForm;
