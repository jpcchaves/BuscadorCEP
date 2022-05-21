
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
            Buscar
          </button>
      </div>
    </div>
  );
}

export default App;
