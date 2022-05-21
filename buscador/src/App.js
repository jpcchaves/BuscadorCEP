import { useState } from "react";
import "./styles.css";
import { FiSearch } from "react-icons/fi";

import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Digite um CEP válido!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("[ERRO] Tente novamente!");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="container-input">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {/* Renderização Condicional */}
      {Object.keys(cep).length > 0 && (
        <main className="main-content">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
      <footer className="footer">
        <p>Desenvolvido por <span className="footer-name"><a href="https://www.linkedin.com/in/joaopaulo-chaves/" target="_blank">João Paulo</a></span></p>
      </footer>
    </div>
  );
}

export default App;
