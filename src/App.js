import React from 'react';
import './global.css'
import './Main.css'
import './App.css'
import './Sidebar.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do GitHub</label>
              <input name="github_username" id="github_username" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required></input>
            </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required></input>
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required></input>
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
