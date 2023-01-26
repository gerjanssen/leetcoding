/* 153. Find Minimum in Rotated Sorted Array: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:26:03 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:26:36
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [l, r] = [0, nums.length - 1];
    while(l < r) {
        const m = l + Math.floor((r - l) / 2);
        if(nums[m] > nums[r]) l = m + 1;
        else r = m;
    }
    return nums[r];
};