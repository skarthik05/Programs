function isValidPalindrome(s, start, end) {
  while (start <= end) {
    if (s[start++] != s[end--]) {
      return false;
    }
  }
  return true;
}

function palindrome(index, s, path, ans) {
  if (index == s.length) {
    ans.push([...path]);
    return;
  }
  for (let i = index; i <= s.length; ++i) {
    console.log({ index }, { i }, { path });
    if (isValidPalindrome(s, index, i)) {
      path.push(s.substring(index, i + 1));
      palindrome(i + 1, s, path, ans);
      path.pop();
    }
  }
}

function callPalindrome(s) {
  const ans = [];
  const path = [];
  palindrome(0, s, path, ans);
  return ans;
}
const result = callPalindrome("abbab");
console.log({ result });
