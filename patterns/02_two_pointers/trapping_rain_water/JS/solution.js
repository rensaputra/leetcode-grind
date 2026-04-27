/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  if (!height || height.length < 3) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMost = 0;
  let rightMost = 0;
  let total = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMost) {
        leftMost = height[left];
      } else {
        total += leftMost - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMost) {
        rightMost = height[right];
      } else {
        total += rightMost - height[right];
      }
      right--;
    }
  }

  return total;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
