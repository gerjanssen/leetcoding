/* 704. Binary Search: https://leetcode.com/problems/binary-search/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 12:31:27 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 12:32:46
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // standard binary search: O(log n) time, O(1) space
    let [l, r] = [0, nums.length - 1];
    while(l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if(nums[m] === target) return m;
        else if(nums[m] < target) l = m + 1;
        else r = m - 1;
    }
    
    return -1;
};