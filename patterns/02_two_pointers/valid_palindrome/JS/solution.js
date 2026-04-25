/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    //skipping non alphanumeric char from the left
    while (left < right && !isAlphaNum(s[left])) {
      left++;
    }

    //skipping non-alphanumeric char from the right
    while (left < right && !isAlphaNum(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

function isAlphaNum(char) {
  return /[a-zA-Z0-9]/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
