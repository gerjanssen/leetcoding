/* 217. Contains Duplicate: https://leetcode.com/problems/contains-duplicate/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-12 21:30:26 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-12 21:30:26 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // solution using set to store seen numbers: O(n) time, O(n) space
    const seen = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) return true;
        seen.add(nums[i]);
    }

    return false;
};