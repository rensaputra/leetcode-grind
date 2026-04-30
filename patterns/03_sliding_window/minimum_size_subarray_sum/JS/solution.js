const assert = require("assert");
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < nums.length) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
    right++;
  }
  return minLength == Infinity ? 0 : minLength;
}

assert.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
