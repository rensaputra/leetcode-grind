/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const sequence = new Set(nums);
  let longestStreak = 0;

  for (const value of sequence) {
    let currentStreak = 0;
    if (!sequence.has(value - 1)) {
      let currentNum = value;
      currentStreak = 1;

      while (sequence.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
    }

    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}
