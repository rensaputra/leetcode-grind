/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const mp = new Map();
  const buckets = [];
  const res = [];

  //Frequency map
  for (const num of nums) {
    mp.set(num, (mp.get(num) || 0) + 1);
  }

  //Fill buckets, frequency is the index, and the value in an array
  mp.forEach((value, key) => {
    if (!buckets[value]) buckets[value] = [];
    buckets[value].push(key);
  });

  //Collect the top k elements
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    for (const num of buckets[i]) {
      res.push(num);
      if (res.length === k) return res;
    }
  }

  return res;
}

//Test case
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Should output: [1, 2]
console.log(topKFrequent([4, 1, 1, 1, 2, 2, 3], 1)); // Should output: [1]
