/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right <= prices.length - 1) {
    if (prices[right] > prices[left]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
