/**
O(n) time - We traverse the array once.
O(n) space - In the worst case, we store all numbers in the Set.
**/

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}
