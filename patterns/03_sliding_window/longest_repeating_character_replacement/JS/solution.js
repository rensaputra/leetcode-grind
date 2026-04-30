const assert = require("assert");
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  const freqChars = new Map();
  let maxFreq = 0;
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    let char = s[right];
    freqChars.set(char, (freqChars.get(char) || 0) + 1);

    maxFreq = Math.max(maxFreq, freqChars.get(char));

    if (right - left + 1 - maxFreq > k) {
      freqChars.set(s[left], freqChars.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

assert.strictEqual(characterReplacement("ABCD", 2), 3);
