//Print Name N times
function printName(n) {
  if (n == 0) return;
  console.log("JS");
  printName(n - 1);
}
printName(3);

//Print Linearly from 1 to N
function oneToN(i, n) {
  if (i > n) return;
  console.log(i);
  oneToN(i + 1, n);
}
oneToN(1, 3);

//Print Linearly from 1 to N
function NtoOne(i, n) {
  if (i < 1) return;
  console.log(i);
  NtoOne(i - 1, n);
}
NtoOne(3, 3);
//Don't use i+1
function oneToNBackTrack(i, n) {
  if (i < 1) return;
  oneToNBackTrack(i - 1, n);
  console.log(i, "Back");
}
oneToNBackTrack(3, 3);
function NtoOneBackTrack(i, n) {
  if (i > n) return;
  NtoOneBackTrack(i + 1, n);
  console.log(i, "Back N to 1");
}
NtoOneBackTrack(1, 3);
