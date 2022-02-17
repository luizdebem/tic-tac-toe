import './Home.css';

function App() {
  return (
    <div className="page-container">
      <div className="game-container">
        <div className="cell">X</div> <div className="cell">O</div> <div className="cell winner">O</div>
        <div className="cell">X</div> <div className="cell">X</div> <div className="cell winner">O</div>
        <div className="cell">O</div> <div className="cell">X</div> <div className="cell winner">O</div>
      </div>
    </div>
  );
}

export default App;
