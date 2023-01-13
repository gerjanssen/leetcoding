/* 121. Best Time to Buy and Sell Stock: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 15:39:42 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 15:52:27
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0;

    // solution using sliding window: O(n) time, O(1) space
    let max = 0;
    let [l, r] = [0, 1];
    while(r < prices.length) {
        if(prices[r] <= prices[l]) {
            l = r;
            r++;

        } else {
            max = Math.max(max, prices[r] - prices[l]);
            r++;
        }
    }

    return max;
};