import React from 'react';
import './index.css';
import './app.css';
import './sidebar.css';
import './main.css'
function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latidude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33586465?v=4" alt="Lucas Rocha"/>
              <div className="user-info">
                <strong>Lucas Rocha</strong>
                <span>php, ruby, js</span>
              </div>
            </header>
            <p>Estudante de sistemas de informação no IFF campos campus centro.</p>
            <a href="https://github.com/LucasFreitasRocha">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33586465?v=4" alt="Lucas Rocha"/>
              <div className="user-info">
                <strong>Lucas Rocha</strong>
                <span>php, ruby, js</span>
              </div>
            </header>
            <p>Estudante de sistemas de informação no IFF campos campus centro.</p>
            <a href="https://github.com/LucasFreitasRocha">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33586465?v=4" alt="Lucas Rocha"/>
              <div className="user-info">
                <strong>Lucas Rocha</strong>
                <span>php, ruby, js</span>
              </div>
            </header>
            <p>Estudante de sistemas de informação no IFF campos campus centro.</p>
            <a href="https://github.com/LucasFreitasRocha">Acessar perfil github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/33586465?v=4" alt="Lucas Rocha"/>
              <div className="user-info">
                <strong>Lucas Rocha</strong>
                <span>php, ruby, js</span>
              </div>
            </header>
            <p>Estudante de sistemas de informação no IFF campos campus centro.</p>
            <a href="https://github.com/LucasFreitasRocha">Acessar perfil github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
