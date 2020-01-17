import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';


function App() {  
  return (
    <div className="app">
      <aside>
        <strong>Cadastro</strong>
        <form>
          <div className="inputblock">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="inputblock">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          
        
          <div className="inputgroup">
            <div className="inputblock">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
          </div>

          <div className="inputgroup">
            <div className="inputblock">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

        </form>
        <button type="submit">Salvar</button>
      </aside>
      <main>
        
      </main>
    </div>
  );
}

export default App;
