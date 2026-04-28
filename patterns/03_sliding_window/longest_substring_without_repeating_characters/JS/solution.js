const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const charSet = new Set();

  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

// Tests
assert.strictEqual(lengthOfLongestSubstring(" "), 1);
assert.strictEqual(lengthOfLongestSubstring(""), 0);
assert.strictEqual(lengthOfLongestSubstring("au"), 2);
assert.strictEqual(lengthOfLongestSubstring("dvdf"), 3);
assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
