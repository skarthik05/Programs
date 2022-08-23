function helper(i, j, a, ans, vis, move, n) {
  if (i == n - 1 && j == n - 1) {
    ans.push(move);
    return;
  }
  //DOWN
  if (i + 1 < n && !vis[i + 1][j] && a[i + 1][j] == 1) {
    vis[i][j] = 1;
    helper(i + 1, j, a, ans, vis, move + "D", n);
    vis[i][j] = 0;
  }

  //LEFT
  if (j - 1 >= 0 && !vis[i][j - 1] && a[i][j - 1] == 1) {
    vis[i][j] = 1;
    helper(i, j - 1, a, ans, vis, move + "L", n);
    vis[i][j] = 0;
  }

  //RIGHT
  if (j + 1 < n && !vis[i][j + 1] && a[i][j + 1] == 1) {
    vis[i][j] = 1;
    helper(i, j + 1, a, ans, vis, move + "R", n);
    vis[i][j] = 0;
  }

  //UP
  if (i - 1 >= 0 && !vis[i - 1][j] && a[i - 1][j] == 1) {
    vis[i][j] = 1;
    helper(i - 1, j, a, ans, vis, move + "U", n);
    vis[i][j] = 0;
  }
}
//optimized
function callMaze(i, j, a, ans, vis, move, n, di, dj) {
  if (i == n - 1 && j == n - 1) {
    ans.push(move);
    return;
  }
  const str = "DLRU";
  for (let index = 0; index < 4; index++) {
    const nexti = i + di[index];
    const nextj = j + dj[index];
    if (
      nexti >= 0 &&
      nextj >= 0 &&
      nexti < n &&
      nextj < n &&
      !vis[nexti][nextj] &&
      a[nexti][nextj] == 1
    ) {
      vis[nexti][nextj] = 1;
      callMaze(nexti, nextj, a, ans, vis, move + str[index], n, di, dj);
      vis[nexti][nextj] = 0;
    }
  }
}

function rateinmaze(arr) {
  const ans = [];
  const di = [1, 0, 0, -1];
  const dj = [0, -1, 1, 0];
  if (arr[0][0] == 1)
    callMaze(
      0,
      0,
      arr,
      ans,
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      "",
      4,
      di,
      dj
    );
  return ans;
}
const result = rateinmaze([
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, , 0],
  [0, 1, 1, 1],
]);
console.log(result);

//TC: O(4^(N*M)) Where 4 is trying with all the posibility
//SC: O(L*N) Worst case(AS) Wher L is the length of the path and N is number of path
