function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      //Checking for empty space
      if (board[i][j] == ".") {
        //Trying for all the posible values
        for (let x = "1"; x <= "9"; x++) {
          //check for if value cab be places
          if (isValid(board, i, j, x)) {
            board[i][j] = "" + x;
            //Place the current value call for the next empty value check
            if (solve(board)) return true;
            //If the value can't place then empty the value and try with other values
            else board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    //checking the current value with different col with the same row
    if (board[row][i] == c) return false;
    //checking the current value with different row with the same col
    if (board[i][col] == c) return false;
    //checking the current value with the 3*3 matrices
    if (
      board[3 * parseInt(row / 3) + parseInt(i / 3)][
        3 * parseInt(col / 3) + parseInt(i % 3)
      ] == c
    )
      return false;
  }
  return true;
}
function callSudoko(board) {
  solve(board);
  return board;
}
let sudoko = [
  ["9", "5", "7", ".", "1", "3", ".", "8", "4"],
  ["4", "8", "3", ".", "5", "7", "1", ".", "6"],
  [".", "1", "2", ".", "4", "9", "5", "3", "7"],
  ["1", "7", ".", "3", ".", "4", "9", ".", "2"],
  ["5", ".", "4", "9", "7", ".", "3", "6", "."],
  ["3", ".", "9", "5", ".", "8", "7", ".", "1"],
  ["8", "4", "5", "7", "9", ".", "6", "1", "3"],
  [".", "9", "1", ".", "3", "6", ".", "7", "5"],
  ["7", ".", "6", "1", "8", "5", "4", ".", "9"],
];
const result = callSudoko(sudoko);
console.log(result);
