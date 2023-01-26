/* 78. Subsets: https://leetcode.com/problems/subsets/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:43:59 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:43:59 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const backtrack = (subset, index) => {
        if(index === nums.length) {
            res.push([...subset]);
            return;
        }

        // take number at index
        subset.push(nums[index]);
        backtrack(subset, index + 1);
        subset.pop();

        // don't take number at index
        backtrack(subset, index + 1);
    };

    backtrack([], 0);
    return res;
};