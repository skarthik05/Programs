function subseq(index, result, arr, n) {
  if (index === n) {
    console.log(result);
    return;
  }
  //take or pick the particular index into subsequence
  result.push(arr[index]);
  subseq(index + 1, result, arr, n);
  result.pop();

  //Not take, or not pick condition, this ele is not added to your subseq
  subseq(index + 1, result, arr, n);
}

//TC : O(2^N * N) //2^N for the posibility of subsequence and N is to print those subsequence
//SC : O(N)

function subseqSum(index, result, s, arr, sum, n) {
  if (n === index) {
    if (s === sum) {
      console.log(result);
    }
    return;
  }
  s += arr[index];
  //Pick Condtion
  result.push(arr[index]);
  subseqSum(index + 1, result, s, arr, sum, n);
  s -= arr[index];
  //Not pick condtion
  result.pop();
  subseqSum(index + 1, result, s, arr, sum, n);
}

//Technique to print only one sub
function firstSubseq(index, result, s, arr, sum, n) {
  if (n === index) {
    //Condition satisfied
    if (s === sum) {
      console.log(result);
      return true;
    }
    //Condition not satisfied
    else return false;
  }
  s += arr[index];
  //Pick Condtion
  result.push(arr[index]);
  if (firstSubseq(index + 1, result, s, arr, sum, n)) return true;
  s -= arr[index];
  //Not pick condtion
  result.pop();
  if (firstSubseq(index + 1, result, s, arr, sum, n)) return true;
  return false;
}

//Count the subsequence of sum K
function countSubseq(index, s, arr, sum, n) {
  if (n === index) {
    //Condition satisfied
    if (s === sum) return 1;
    //Condition not satisfied
    else return 0;
  }
  s += arr[index];
  //Pick Condtion
  let l = countSubseq(index + 1, s, arr, sum, n);
  s -= arr[index];
  //Not pick condtion
  let r = countSubseq(index + 1, s, arr, sum, n);
  return l + r;
}
const arr = [2, 1, 1];
const result = countSubseq(0, 0, arr, 2, arr.length);
console.log({ result });
