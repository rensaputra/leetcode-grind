/**
 * Pattern: Hashing (Frequency/Index Map)
 * Time: O(n) - Single pass
 * Space: O(n) - Storing visited numbers in the Map
 */

function twoSum(nums, target) {
  // 1. Initialize a new Map to store: [Value -> Index]
  const map = new Map();

  // 2. Loop through the array 'nums' using a standard for-loop
  for (let i = 0; i < nums.length; i++) {
    // a. Calculate the 'complement'
    //    (What number do I need to add to the current one to hit 'target'?)
    const complement = target - nums[i];
    // b. Check if the 'complement' exists in the Map
    if (map.has(complement)) {
      // i. IF YES:
      //    We found the pair! Return an array containing the
      //    index from the Map and the current index.
      return [map.get(complement), i];
    } else {
      // ii. IF NO:
      //    Store the current number and its index in the Map
      //    so future numbers can look it up.
      map.set(nums[i], i);
    }
  }

  // 3. Return something if no solution is found,
  return [];
}
