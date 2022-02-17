import { useState } from 'react';
import './Home.css';

function App() {
  const [game, setGame] = useState([
    [{ state: "", i: 0, j: 0 }, { state: "", i: 0, j: 1 }, { state: "", i: 0, j: 2 }],
    [{ state: "", i: 1, j: 0 }, { state: "", i: 1, j: 1 }, { state: "", i: 1, j: 2 }],
    [{ state: "", i: 2, j: 0 }, { state: "", i: 2, j: 1 }, { state: "", i: 2, j: 2 }]
  ]);

  // "X" || "O"
  const [turn, setTurn] = useState("X");

  const switchTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const updateValue = (i, j) => {
    if (game[i][j].state === "") {
      game[i][j].state = turn;
      switchTurn();
      setGame(game);
    };
  }

  const handleCellClick = (i, j) => {
    updateValue(i, j);
  };

  const renderGame = () => {
    const response = [];
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        response.push(<div className="cell" onClick={() => { handleCellClick(i, j); }}> {game[i][j].state} </div>);
      }
    };
    return response;
  };

  return (
    <div className="page-container">
      <div className="game-container">
        {renderGame()}
      </div>
    </div>
  );
}

export default App;
