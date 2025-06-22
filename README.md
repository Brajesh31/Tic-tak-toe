# React Tic-Tac-Toe Game

![Gameplay](/screenshots/tic-tac-toe.png)

This is a simple Tic-Tac-Toe game built with React. It allows two players to take turns marking empty squares on a 3x3 grid, aiming to get three of their symbols (X or O) in a row, column, or diagonal.

## Features

- Players can enter their names and select their symbols (X or O).
- Players take turns marking empty squares on the game board.
- The game displays a log of each turn, showing which player selected which square.
- When the game ends, it displays the winner (if there is one) or indicates a draw.
- Players can restart the game at any time.

## Screenshots

![Gameplay](/screenshots/gameboard.png)

![Game Over](/screenshots/gameover.png)

## Project Structure

- `src/components/Player.js`: Represents a player in the game, allowing them to change their name and symbol.
- `src/components/GameBoard.js`: Represents the tic-tac-toe game board, allowing players to make moves and displaying the current state of the board.
- `src/components/Log.js`: Displays a log of the game's turns.
- `src/components/GameOver.js`: Displays the game over screen, indicating the winner (if there is one) or a draw and providing a button to restart the game.
- `src/winning-combinations.js`: Defines the winning combinations for the tic-tac-toe game.
- `src/App.js`: Contains the main logic for the game, including handling turns, determining the winner, and restarting the game.
- `src/index.js`: Entry point of the application.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open [http://localhost:5173](http://localhost:3000) in your browser to play the game.

## Technologies Used

- React: JavaScript library for building user interfaces.
- useState Hook: React hook for managing state in functional components.

## Credits

This project was created by [Your Name].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
