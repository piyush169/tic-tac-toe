# Tic-Tac-Toe Game

This is a simple implementation of the classic game Tic-Tac-Toe using JavaScript, HTML, and CSS.

## How to Play

- The game board consists of a 3x3 grid.
- Players take turns marking a cell in the grid with their symbol (either 'X' or 'O').
- The first player to get 3 of their symbols in a row (vertically, horizontally, or diagonally) is the winner.
- If all cells on the board are filled and no player has won, the game is a draw.

## Implementation Details

- The game board is represented as a collection of div elements with the class 'cell'.
- Click event listeners are added to each cell, allowing players to mark their symbol in the cell.
- The game checks for a win or draw condition after each move.

## Running the Game

To play the game, store all the files locally and simply open the `index.html` file in your web browser.

## Future Improvements

- Add a feature to let players choose their symbol before starting the game.
- Implement a score counter to keep track of how many games each player has won.
