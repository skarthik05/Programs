//Parameterised Way
function parameterised(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  parameterised(i - 1, sum + i);
}
parameterised(3, 0);
//Functional Way

function functionalWay(n) {
  if (n == 1) return 1;
  return n + functionalWay(n - 1);
}
console.log(functionalWay(3));
function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(4));
