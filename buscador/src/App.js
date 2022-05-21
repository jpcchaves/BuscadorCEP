import { useState } from 'react'
import './styles.css'
import { FiSearch } from 'react-icons/fi'

function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    alert('valor do input ' + input)
  }




  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
          <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={e => setInput(e.target.value)}
          />

          <button className="buttonSearch" onClick={handleSearch}>
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
