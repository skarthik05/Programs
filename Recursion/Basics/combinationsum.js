//With duplicates
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

//TS : O(2^T * K) //Where k is the DS to put into another DS

//Without allowing Duplicates

function sumCombinationWithoutDuplicates(index, target, arr, ans, ds) {
  //found the sum
  if (target === 0) {
    ans.push([...ds]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    //i > index, pick if the element is appearing for the first time
    //arr[i] ==arr[i-1], to avoid the duplicate combination
    if (i > index && arr[i] == arr[i - 1]) continue;
    if (arr[i] > target) break;
    ds.push(arr[i]);
    sumCombinationWithoutDuplicates(i + 1, target - arr[i], arr, ans, ds);
    ds.pop();
  }
}
function withoutDuplicate(nums) {
  const ans = [];
  sumCombinationWithoutDuplicates(0, 4, nums, ans, []);
  return ans;
}
const arr1 = [1, 1, 1, 2, 2];
const result1 = withoutDuplicate(arr1);
console.log({ result1 });

//TS: O(2^N * K) Where '2^N' for all the unqiue combination(i.e., Number of subseq) for recursion,
//'K' is the ds to insert into another ds(i.e., avg length of every combination) //for adding values
//SC: O(K*X) Where 'K' is the avg length and 'X' is the combination and if i am ignoring the auxilary space of recursion
