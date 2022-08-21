//Permutaion with extra time and space

function callpermuation(arr, ans, ds, visited) {
  if (ds.length == arr.length) {
    ans.push([...ds]);
    return ans;
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!visited[i]) {
      ds.push(arr[i]);
      visited[i] = 1;
      callpermuation(arr, ans, ds, visited);
      ds.pop();
      visited[i] = 0;
    }
  }
}
function permuation(nums) {
  const ans = [];
  const result = callpermuation(nums, ans, [], []);
  return ans;
}

//TS: O(N! * N) Where N1 is the recursion and N is looping thrpugh
//SC : O(N * N) WHere N is for storing the DS and N is for storing the VISITED array.(ignoring the ans array)

//Wihtout using extra space
function callpermuationWithNoExtraspace(index, arr, ans) {
  if (index == arr.length) {
    ans.push([...arr]);
  }
  for (let i = index; i < arr.length; i++) {
    swap(arr, index, i);
    callpermuationWithNoExtraspace(index + 1, arr, ans);
    swap(arr, index, i);
  }
}
function swap(arr, index, i) {
  let temp = arr[index];
  arr[index] = arr[i];
  arr[i] = temp;
  return arr;
}
function permuationWithNoSpace() {
  const ans = [];
  const result = callpermuationWithNoExtraspace(0, nums, ans, []);
  return ans;
}
const nums = [1, 2, 3];
const result = permuationWithNoSpace(nums);
console.log({ result });

//TS: O(N! * N) Where N1 is the recursion and N is looping thrpugh
//SC : O(N! * N) WHere N! is for returning ans and N is for recursion depth.(we are not using any extra space here)
