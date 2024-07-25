import './App.css';
import Lenguaje from './Lenguaje';
import Pagina from './Pagina';
import Map from './Map';
import Provider from './contexto/Provider';

function App() {
  return (
    <Provider>
      <div className="flags">
        <Lenguaje />
      </div>
      <div className='Content'>
        <Pagina />
        <Map />
      </div>
    </Provider>
  );
}

export default App;
