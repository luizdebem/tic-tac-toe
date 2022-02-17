import { useState } from 'react';
import './Home.css';

function App() {
  const [game, setGame] = useState([
    [{ state: "", id: 0 }, { state: "", id: 1 }, { state: "", id: 2 }],
    [{ state: "", id: 3 }, { state: "", id: 4 }, { state: "", id: 5 }],
    [{ state: "", id: 6 }, { state: "", id: 7 }, { state: "", id: 8 }]
  ]);

  // "X" || "O"
  const [turn, setTurn] = useState("X");

  const switchTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const updateValue = (cellID) => {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        if (game[i][j].id === cellID && game[i][j].state === "") {
          game[i][j].state = turn;
          switchTurn();
          setGame(game);
          break;
        }
      }
    };
  }

  const handleCellClick = (cellID) => {
    updateValue(cellID);
  };

  const renderedGame = () => {
    const response = [];
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        response.push(<div className="cell" key={game[i][j].id} onClick={() => { handleCellClick(game[i][j].id); }} > {game[i][j].state} </div>);
      }
    }
    return response;
  };

  return (
    <div className="page-container">
      <div className="game-container">
        {renderedGame()}
      </div>
    </div>
  );
}

export default App;
