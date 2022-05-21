import './styles.css'
import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
          <input
          type="text"
          placeholder="Digite seu CEP..."
          />

          <button className="buttonSearch">
            <FiSearch size={25} color="#FFF"/>
          </button>

      </div>

      <main className='main-content'>
            <h2>CEP: 55026722</h2>
            
            <span>Rua Teste</span>
            <span>Complemento: loremm</span>
            <span>Indianópolis</span>
            <span>Caruaru - PE</span>
          </main>

    </div>
  );
}

export default App;
