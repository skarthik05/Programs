/**Find Missing and Dublicate values
 * We have to place each values in there respective position
 * If the current values aren't the same,
 *  then swap
 * else i++ //Either the value is duplicate/it is in correct position
 */
const swap = (left, right, arr) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
};
const FindMissingAndDublicate = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] != arr[arr[i] - 1]) {
      swap(i, arr[i] - 1, arr);
      //   let temp = arr[i];
      //   arr[i] = arr[i] - 1;
      //   [arr[i]-1] = temp;
    } else {
      i++;
    }
  }
  let repeating = [];
  let Missing = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      repeating.push(arr[i]);
      Missing.push(i + 1);
    }
  }
  return { arr, repeating, Missing };
};
console.log(FindMissingAndDublicate([3, 1, 2, 3, 5]));
