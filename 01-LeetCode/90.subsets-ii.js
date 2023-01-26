/* 90. Subsets II: https://leetcode.com/problems/subsets-ii/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:46:20 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:46:20 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const res = [];
    const backtrack = (subset, index) => {
        if(index === nums.length){
            res.push([...subset]);
            return;
        }

        // take number at index
        subset.push(nums[index]);
        backtrack(subset, index + 1);
        subset.pop();

        // don't take number at index (also skip all duplicates of number at index)
        let i = index;
        for(i = index + 1; i < nums.length; i++) {
            if(nums[i] !== nums[index]) break;
        }
        backtrack(subset, i);
    };

    backtrack([], 0);
    return res;
};