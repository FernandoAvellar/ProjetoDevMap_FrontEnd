import React, { useState, useEffect } from 'react';
import './global.css'
import './Main.css'
import './App.css'
import './Sidebar.css'

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  //Roda sempre ao carregar esse componente e armazana a posição do usuário
  useEffect(() => {  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    console.log(github_username, techs, latitude, longitude);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/17768309?v=4" alt="Fernando Avellar"></img>
              <div className="user-info">
                <strong>Fernando Avellar</strong>
                <span>ReactJS, Node.js, Java</span>
              </div>
            </header>
            <p>Engenheiro de Telecomunicações apaixonado pelo mercado de TI e por novas tecnologias de desenvolvimento WEB e Mobile.</p>
            <a href="https://github.com/FernandoAvellar" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/17768309?v=4" alt="Fernando Avellar"></img>
              <div className="user-info">
                <strong>Fernando Avellar</strong>
                <span>ReactJS, Node.js, Java</span>
              </div>
            </header>
            <p>Engenheiro de Telecomunicações apaixonado pelo mercado de TI e por novas tecnologias de desenvolvimento WEB e Mobile.</p>
            <a href="https://github.com/FernandoAvellar" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/17768309?v=4" alt="Fernando Avellar"></img>
              <div className="user-info">
                <strong>Fernando Avellar</strong>
                <span>ReactJS, Node.js, Java</span>
              </div>
            </header>
            <p>Engenheiro de Telecomunicações apaixonado pelo mercado de TI e por novas tecnologias de desenvolvimento WEB e Mobile.</p>
            <a href="https://github.com/FernandoAvellar" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/17768309?v=4" alt="Fernando Avellar"></img>
              <div className="user-info">
                <strong>Fernando Avellar</strong>
                <span>ReactJS, Node.js, Java</span>
              </div>
            </header>
            <p>Engenheiro de Telecomunicações apaixonado pelo mercado de TI e por novas tecnologias de desenvolvimento WEB e Mobile.</p>
            <a href="https://github.com/FernandoAvellar" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
