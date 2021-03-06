import React, {useState, useEffect}/*, {useState}*/ from 'react';
import api from './services/api';

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
  const [devs, setDevs] = useState([])

  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');

  

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude } = position.coords;

        setlatitude(latitude);
        setlongitude(longitude);


      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }

    )
  }, []);
  
  useEffect(() =>{
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithub_username('');
    setTechs('');
  }

  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>
          
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setlatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setlongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (<li className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}> Acessar perfil no Github</a>
          </li>
          ))}          
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
