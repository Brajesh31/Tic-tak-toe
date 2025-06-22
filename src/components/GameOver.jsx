export default function GameOver({ winner, onRestart }) {
    return (
      <div id="game-over">
        <h1>Game Over!</h1>
        {winner && <p>Winner: {winner}</p>}
        {!winner && <p>It&apos;ts a Draw!</p>}
        <p>
          <button onClick={onRestart}>Rematch!</button>
        </p>
      </div>
    );
  }
  