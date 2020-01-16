import React, {useState, useEffect} from 'react';
import api from './services/api'
import './index.css';
import './app.css';
import './sidebar.css';
import './main.css';
import  DevItem from './Components/DevItem/DevItem';
import DevForm from './Components/DevForm/DevForm';
function App() {
  const [devs, setDevs] = useState([]);
  

  useEffect( () =>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])
  async function handleAddDev(data){
    
    const response = await api.post('/dev/create',data);
    

    setDevs([...devs, response.data])

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
        {devs.map( dev =>(
          < DevItem key={dev._id} dev={dev} />
          )
        )}
          
          
        </ul>
      </main>
    </div>
  );
}

export default App;
