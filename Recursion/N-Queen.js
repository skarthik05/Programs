function isSafe(row, col, board, n) {
  let dupR = row;
  let dupC = col;
  //To check for the Upper Diagonal
  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") return false;
    row--;
    col--;
  }
  //To check for the left column
  row = dupR;
  col = dupC;
  while (col >= 0) {
    if (board[row][col] == "Q") return false;
    col--;
  }

  //To check for the lowe diagonal
  row = dupR;
  col = dupC;
  while (row < n && col >= 0) {
    if (board[row][col] == "Q") return false;
    row++;
    col--;
  }
  return true;
}
//Using the additionl space and time
function solveNQueen(col, board, ans, n) {
  if (col == n) {
    console.log(board);
    ans.push([...board]);
    return;
  }
  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row][col] = "Q";
      solveNQueen(col + 1, board, ans, n);
      board[row][col] = ".";
    }
  }
}

//Without using additional space and time
function nQueenWithOptimization(
  col,
  leftRow,
  upperDiagonal,
  lowerDiagonal,
  board,
  ans,
  n
) {
  if (col === n) {
    ans.push([...board]);
    return;
  }
  for (let row = 0; row < n; row++) {
    // console.log(
    //   leftRow[row] == 0 &&
    //     lowerDiagonal[col + row] == 0 &&
    //     upperDiagonal[n - 1 + col - row] == 0
    // );
    if (
      leftRow[row] == 0 &&
      lowerDiagonal[col + row] == 0 &&
      upperDiagonal[n - 1 + col - row] == 0
    ) {
      board[row][col] = "Q";
      leftRow[row] = 1;
      lowerDiagonal[col + row] = 1;
      upperDiagonal[n - 1 + col - row] = 1;
      nQueenWithOptimization(
        col + 1,
        leftRow,
        upperDiagonal,
        lowerDiagonal,
        board,
        ans,
        n
      );
      board[row][col] = ".";

      leftRow[row] = 0;
      lowerDiagonal[col + row] = 0;
      upperDiagonal[n - 1 + col - row] = 0;
    }
  }
}
function nQueen(n) {
  const board = [];
  const ans = [];
  for (let i = 0; i < n; i++) {
    board[i] = [".", ".", ".", "."];
  }
  nQueenWithOptimization(
    0,
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    board,
    ans,
    n
  );
  // solveNQueen(0, board, ans, n);
  return ans;
}
const result = nQueen(4);
