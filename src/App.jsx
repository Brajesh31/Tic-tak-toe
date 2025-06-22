import Player from "./components/Players";
import GameBorad from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].PLAYERS === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  // need to create deep copy of gameBoard because when we restart game it does not reset the gameboard because array are object references a memory location
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    // gameBoard[turn.square.row][turn.square.col] = turn.PLAYERS;
    const { square, PLAYERS } = turn;
    const { row, col } = square;
    gameBoard[row][col] = PLAYERS;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(null);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);
  // let gameBoard = initialGameBoard;
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, PLAYERS);
  const hasDraw = gameTurns.length === 9 && !winner;

  //function triggeres on every turn
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      // let curPlayer = "X";
      const curPlayer = deriveActivePlayer(prevTurns);

      // if (prevTurns.length > 0 && prevTurns[0].PLAYERS === "X") {
      //   curPlayer = "O";
      // }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, PLAYERS: curPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
    // setActivePlayer("X");
  }

  function handlePlayerNameChange(symbol, newName) {
    // setPlayer((prevPlayer) => ({ ...prevPlayer, [symbol]: newName }));
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS  */}
        <ol id="players" className="highlight-player">
          {/* in react when we reuses components then react make isolated instances for every component so if a state change in one instance of component it does not effect the state of other instance  */}
          <Player
            // initialName="Player 1"
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            // initialName="Player 2"
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBorad
          onSelectSquare={handleSelectSquare}
          // activePlayerSymbol={activePlayer}
          // turns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
