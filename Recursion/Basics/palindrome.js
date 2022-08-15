function palindrome(i, s) {
  if (i >= parseInt(s.length / 2)) return true;
  if (s[i] != s[s.length - i - 1]) return false;
  return palindrome(i + 1, s);
}
console.log(palindrome(0, "mam"));

//TC: O(N/2)
//SC: O(N/2)
