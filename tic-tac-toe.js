const game = function () {
// draw game board, initialize game
// log top row, divider, mid row, divider, bottom row
// log rules for game

// place a mark,
// validate input: pos must be a num, must be between 1 and 9
// letter must be a string, x or o;

// check turns

// check for winner
// how many ways to win?  3 horiz rows, 3 vert rows, 2 diagonal
// end game if winner, display win message
// end game if a draw

// redraw board

// start new game

// refactor to use an object and arrays to iterate over

  let boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let initialize = true;
  let turnCount = 0;
  let winner = false;
  let winningPlayer;

  const validateInput = function (position, letter) {
    if(!(position >= 1  && position <= 9)) {
      console.log('Please enter a number between 1 and 9 for the position.');
      return
    }
    if(typeof letter != 'string') {
      console.log('Please enter a string for the letter, x or o.');
      return
    }
    if(!initialize && boardPositions[position - 1] != ' ') {
      console.log('That position is already taken.  Please choose another position');
      return
    }
    letter = letter.toUpperCase();
    if(!(letter == 'X' || letter == 'O')) {
      console.log('Please choose only x or o');
      return
    } else {
      boardPositions[position - 1] = letter;
      turnCount++;
    }

  };

  const sameLetter = function (ltrA, ltrB, ltrC) {
    if(ltrA == ' ' || ltrB == ' ' || ltrC == ' ') {
      return
    }
    console.log(ltrA, ltrB, ltrC);
    if(ltrA == ltrB && ltrB == ltrC) {
      winningPlayer = ltrA;
      return true
    }
  };

  const checkForWinner = function () {
    if(turnCount < 5) {
      console.log('turnCount = ', turnCount);
      console.log('winner = ', winner);
      return winner;
    }
    if(
      // rows
      sameLetter(boardPositions[0], boardPositions[1], boardPositions[2]) ||
      sameLetter(boardPositions[3], boardPositions[4], boardPositions[5]) ||
      sameLetter(boardPositions[6], boardPositions[7], boardPositions[8]) ||
      // columns
      sameLetter(boardPositions[0], boardPositions[3], boardPositions[6]) ||
      sameLetter(boardPositions[1], boardPositions[4], boardPositions[7]) ||
      sameLetter(boardPositions[2], boardPositions[5], boardPositions[8]) ||
      // diagonals
      sameLetter(boardPositions[0], boardPositions[4], boardPositions[8]) ||
      sameLetter(boardPositions[2], boardPositions[4], boardPositions[6])
    ) {
      winner = true;
      return winner;
    }

    return winner;
  };

  return {

    drawBoard : function () {
      if(initialize) {
        console.log('Tic Tac Toe!');
        console.log('Available methods are: \n \n');
        console.log('ticTacToe.takeTurn(position, letter)');
        console.log('   - Places a letter (use X or O) in the supplied position. Must be a string. \n');
        console.log('ticTacToe.drawBoard() \n');
        console.log('   - Displays the current board \n');
        console.log('ticTacToe.newGame() \n');
        console.log('   - Starts a new game \n \n');
        console.log('Board Positions: \n');
      }
      if(winner) {
        console.log(winningPlayer +' Wins!  Game Over! Use ticTacToe.newGame() to start a new game.');
        return
      }
      console.log(boardPositions[0] + '  |  ' + boardPositions[1] + '  |  ' + boardPositions[2]);
      console.log('-- | --- | --');
      console.log(boardPositions[3] + '  |  ' + boardPositions[4] + '  |  ' + boardPositions[5]);
      console.log('-- | --- | --');
      console.log(boardPositions[6] + '  |  ' + boardPositions[7] + '  |  ' + boardPositions[8]);

      if(initialize) {
        boardPositions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
      }
      initialize = false;
    },

    takeTurn : function(position, letter) {
      validateInput(position, letter);
      checkForWinner();
      this.drawBoard();
    },

    newGame : function () {
      initialize = true;
      winner = false;
      turnCount = 0;
      boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.drawBoard();
    }

  }

};

const ticTacToe = game();

ticTacToe.drawBoard();