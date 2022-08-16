function sumCombinaton(index, target, arr, ans, ds) {
  if (index == arr.length) {
    if (target == 0) {
      return ans.push([...ds]);
    }
    return ans;
  }
  if (arr[index] <= target) {
    ds.push(arr[index]);
    sumCombinaton(index, target - arr[index], arr, ans, ds);
    ds.pop();
  }
  sumCombinaton(index + 1, target, arr, ans, ds);
}
function callsubcomb(nums) {
  let result = [];
  sumCombinaton(0, 7, nums, result, []);
  return result;
}
const arr = [2, 3, 6, 7];
const result = callsubcomb(arr);
console.log({ result });
