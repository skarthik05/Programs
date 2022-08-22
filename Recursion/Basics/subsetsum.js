//callculating the sum of all the subsets
function helpersubsetsum(index, sum, arr, ans) {
  if (index === arr.length) {
    console.log({ sum });
    ans.push(sum);
    return;
  }
  //To pick up the index value
  helpersubsetsum(index + 1, sum + arr[index], arr, ans);
  //To Skip the index value
  helpersubsetsum(index + 1, sum, arr, ans);
}
function subsetsum(nums) {
  const ans = [];
  helpersubsetsum(0, 0, nums, ans);
  ans.sort((a, b) => a - b);
  return ans;
}
const nums = [3, 2, 1];
const result = subsetsum(nums);
console.log({ result });
//storing the unique subset
function helpersubsetsum1(index, num1, ds, ans) {
  ans.push([...ds]);
  for (let i = index; i <= num1.length - 1; i++) {
    if (i != index && num1[i] == num1[i - 1]) continue;
    ds.push(num1[i]);
    helpersubsetsum1(i + 1, num1, ds, ans);
    ds.pop();
  }
}
function subsetsum1(num1) {
  const ans = [];
  helpersubsetsum1(0, num1, [], ans);
  return ans;
}
const num1 = [1, 2, 2];
const result1 = subsetsum1(num1);
console.log({ result1 });

//TC : O(2^N * N) where 2^N is the recursion call, N is the subset(i.e.,putting ds into ans or avg length)
//SC : O(2^N * K)
//AS: O(N)
