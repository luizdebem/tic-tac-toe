import { useState } from 'react';
import './Home.css';

function App() {
  const [game, setGame] = useState([
    [{ state: "", i: 0, j: 0, winner: false }, { state: "", i: 0, j: 1, winner: false }, { state: "", i: 0, j: 2, winner: false }],
    [{ state: "", i: 1, j: 0, winner: false }, { state: "", i: 1, j: 1, winner: false }, { state: "", i: 1, j: 2, winner: false }],
    [{ state: "", i: 2, j: 0, winner: false }, { state: "", i: 2, j: 1, winner: false }, { state: "", i: 2, j: 2, winner: false }]
  ]);

  // "X" || "O"
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const switchTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const updateValue = (i, j) => {
    if (game[i][j].state === "") {
      game[i][j].state = turn;
      switchTurn();
      setGame(game);
    };
  };

  const getRowState = (row) => game[row].map(cell => cell);
  const getColumnState = (column) => game.map(row => row[column]);

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      const row = getRowState(i);
      const column = getColumnState(i);

      const mainDiagonal = [
        game[0][0],
        game[1][1],
        game[2][2]
      ];

      const inverseDiagonal = [
        game[2][0],
        game[1][1],
        game[0][2]
      ]

      if (row.every(cell => cell.state === "X")) {
        row.forEach(cell => cell.winner = true);
        return setWinner("X");
      }
      if (row.every(cell => cell.state === "O")) {
        row.forEach(cell => cell.winner = true);
        return setWinner("O");
      }

      if (column.every(cell => cell.state === "X")) {
        column.forEach(cell => cell.winner = true);
        return setWinner("X");
      }
      if (column.every(cell => cell.state === "O")) {
        column.forEach(cell => cell.winner = true);
        return setWinner("O");
      }

      if (mainDiagonal.every(cell => cell.state === "X")) {
        mainDiagonal.forEach(cell => cell.winner = true);
        return setWinner("X");
      }
      if (mainDiagonal.every(cell => cell.state === "O")) {
        mainDiagonal.forEach(cell => cell.winner = true);
        return setWinner("O");
      }

      if (inverseDiagonal.every(cell => cell.state === "X")) {
        inverseDiagonal.forEach(cell => cell.winner = true);
        return setWinner("X");
      }
      if (inverseDiagonal.every(cell => cell.state === "O")) {
        inverseDiagonal.forEach(cell => cell.winner = true);
        return setWinner("O");
      }

      if (clickCount + 1 === 9) {
        return setWinner("draw");
      }
    };
  };

  const [clickCount, setClickCount] = useState(0);

  const handleCellClick = (i, j) => {
    setClickCount(clickCount + 1);
    if (!winner) {
      updateValue(i, j);
      checkWinner();
    };
  };

  const renderGame = () => {
    const response = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        response.push(<div className={`cell ${game[i][j].winner ? "winner" : ""}`} onClick={() => { handleCellClick(i, j); }}> {game[i][j].state} </div>);
      }
    };
    return response;
  };

  return (
    <div className="page-container">
      <div className="result-text" style={{ opacity: winner ? 1 : 0 }}>{ winner && winner !== "draw" ? `"${winner}" foi vencedor!` : "Empate!" }</div>
      <div className="game-container">
        {renderGame()}
      </div>
    </div>
  );
}

export default App;
