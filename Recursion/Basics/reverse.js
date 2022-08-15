//Using two pointers
function reverseWithTwoPointer(l, r, arr) {
  if (l >= r) return;
  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseWithTwoPointer(l + 1, r - 1, arr);
}

//Using single variable
function reverseWithOneVariable(i, arr, n) {
  if (i >= parseInt(n / 2)) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  reverseWithOneVariable(i + 1, arr, n);
}
const arr = [5, 4, 3, 2, 1];
const result = reverseWithOneVariable(0, arr, arr.length);
console.log({ arr });
