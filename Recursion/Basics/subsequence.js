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

const arr = [3, 1, 2];
const result = subseq(0, [], arr, arr.length);

//TC : O(2^N * N) //2^N for the posibility of subsequence and N is to print those subsequence
//SC : O(N)
