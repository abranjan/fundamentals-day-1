const game = function () {
// draw game board, initialize game
// log top row, divider, mid row, divider, bottom row

// place a mark,
// validate input: pos must be a num, must be between 1 and 9
// letter must be a string, x or o;

// check turns

// check for winner

// redraw board

// start new game
  let boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let initialize = true;

  return {

    drawBoard : function () {
      console.log('Tic Tac Toe!');
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
      console.log(letter);
      if(!(letter == 'X' || letter == 'O')) {
        console.log('Please choose only x or o');
        return
      }
      boardPositions[position - 1] = letter;
      this.drawBoard();
    }

  }

};

const ticTacToe = game();

ticTacToe.drawBoard();