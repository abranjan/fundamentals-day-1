// draw game board, initialize game
// log top row, divider, mid row, divider, bottom row

// place a mark, validate input

// check turns

// check for winner

// redraw board

// start new game
let boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const drawBoard = function () {
  console.log('Tic Tac Toe!');
  console.log(boardPositions[0] + '  |  ' + boardPositions[1] + '  |  ' + boardPositions[2]);
  console.log('-- | --- | --');
  console.log(boardPositions[3] + '  |  ' + boardPositions[4] + '  |  ' + boardPositions[5]);
  console.log('-- | --- | --');
  console.log(boardPositions[6] + '  |  ' + boardPositions[7] + '  |  ' + boardPositions[8]);
};








drawBoard();