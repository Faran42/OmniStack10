import React/*, {useState}*/ from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

// import Header from './Header';

//Componente: Bloco isolado de HTML, CSS e JS, o qual ão interfere no restante da aplicação, Função que retorna conteudo HTML, css, js pra interface, etc
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  /*const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1); 
  }
  function decrementCounter() {
    setCounter(counter - 1); 
  }*/

  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4" alt="Faran"/>
              <div className="user-info">
                <strong>Franklyn Venancio Rocha</strong>
                <span>Node.JS, ReactJS</span>
              </div>
            </header>
            <p>Aprendendo a desenvolver</p>
            <a href="https://github.com/Faran42"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4" alt="Faran"/>
              <div className="user-info">
                <strong>Franklyn Venancio Rocha</strong>
                <span>Node.JS, ReactJS</span>
              </div>
            </header>
            <p>Aprendendo a desenvolver</p>
            <a href="https://github.com/Faran42"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4" alt="Faran"/>
              <div className="user-info">
                <strong>Franklyn Venancio Rocha</strong>
                <span>Node.JS, ReactJS</span>
              </div>
            </header>
            <p>Aprendendo a desenvolver</p>
            <a href="https://github.com/Faran42"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4" alt="Faran"/>
              <div className="user-info">
                <strong>Franklyn Venancio Rocha</strong>
                <span>Node.JS, ReactJS</span>
              </div>
            </header>
            <p>Aprendendo a desenvolver</p>
            <a href="https://github.com/Faran42"> Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>







    /*<>
      {/* <Header title="Titulo 1" />
      <Header title="Titulo 2" />
      <Header title="Titulo 4" /> '*'/}
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button><span style={{padding: 10}}></span>  
      <button onClick={decrementCounter}>Incrementar</button>  
    </>
    */





  );
}

export default App;
