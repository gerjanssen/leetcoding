/* 70. Climbing Stairs: https://leetcode.com/problems/climbing-stairs/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:31:55 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:34:52
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // solution using dynamic programming and an array to store all previous computations: O(n) time, O(n) space
    // const dp = new Array(n + 1);
    // dp[0] = 1;
    // dp[1] = 1;

    // for(let i = 2; i < dp.length; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }

    // return dp[dp.length - 1];


    // solution using dynamic programming and two variables to store only the two latest computations: O(n) time, O(1) space
    let [prev1, prev2] = [1, 1];
    for(let i = 1; i < n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
};