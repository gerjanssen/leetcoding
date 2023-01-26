/* 33. Search in Rotated Sorted Array: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:27:09 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 11:27:09 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    else if(nums.length === 1 && nums[0] === target) return 0;

    const minIndex = findMinIndex(nums);
    if(target === nums[minIndex]) return minIndex;
    
    let l, r;
    if(target <= nums[nums.length - 1]){
        l = minIndex;
        r = nums.length - 1;
    } else {
        l = 0;
        r = minIndex;
    }

    while(l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if(nums[m] === target) return m;
        else if(nums[m] < target) l = m + 1;
        else r = m - 1;
    }
    
    return -1;
};

var findMinIndex = function(nums) {
    let [l, r] = [0, nums.length - 1];
    while(l < r) {
        const m = l + Math.floor((r - l) / 2);
        if(nums[m] > nums[r]) l = m + 1;
        else r = m;
    }
    return l;
};