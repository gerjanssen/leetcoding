/* 1. Two Sum: https://leetcode.com/problems/two-sum/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-12 21:22:30 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-12 21:30:39
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // bruteforce solution: O(n^2) time, O(n) space
    // for(let i = 0; i < nums.length - 1; i++) {
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target) return [i, j];
    //     }
    // }

    // solution using hash map: O(n) time, O(n) space
    const seen = {};
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(seen.hasOwnProperty(diff)) return [seen[diff], i];
        else seen[nums[i]] = i;
    }
};