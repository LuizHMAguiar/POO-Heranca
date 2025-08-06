import './App.css'
import { Cachorro } from './models/Cachorro';
import { Hamster } from './models/Hamster';

function App() {
  const rex = new Cachorro('Pitoco');
  const ham = new Hamster('Bolinha');

  return (
    <>
      <div> 
        <p>🐶Cachorro: {rex.getNome()} </p>
        <p>{rex.emitirSom()}</p>
        <p>{rex.correr()}</p>
      </div>
      <hr />
      <div>
        <p>🐹Hamster: {ham.getNome()} </p>
        <p>{ham.emitirSom()}</p>
        <p>{ham.correr()}</p>
      </div>
    </>
  );
}

export default App