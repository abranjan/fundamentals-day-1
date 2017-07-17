const game = function () {
// draw game board, initialize game
// log top row, divider, mid row, divider, bottom row

// place a mark,
// validate input: pos must be a num, must be between 1 and 9
// letter must be a string, x or o;

// check turns

// check for winner
// how many ways to win?  3 horiz rows, 3 vert rows, 2 diagonal

// redraw board

// start new game

  let boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let initialize = true;
  let turnCount = 0;
  let winner = false;

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
    }

  };

  const sameLetter = function (ltrA, ltrB, ltrC) {
    console.log(ltrA, ltrB, ltrC);
    if(ltrA == ltrB && ltrB == ltrC) {
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
      }
      if(winner) {
        console.log('Winner!!  Game Over!');
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
      turnCount++;
      checkForWinner();
      this.drawBoard();
    }

  }

};

const ticTacToe = game();

ticTacToe.drawBoard();