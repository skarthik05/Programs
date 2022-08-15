function fact(n) {
  if (n <= 1) return n;
  return fact(n - 1) + fact(n - 2);
}
const result = fact(4);
console.log({ result });

//TC - O(2^N) NOTE: Not exactly 2^N but near to it
