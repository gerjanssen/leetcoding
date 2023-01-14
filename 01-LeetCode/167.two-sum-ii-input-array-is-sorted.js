/* 167. Two Sum II - Input Array Is Sorted: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 13:21:36 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 13:22:35
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // solution using a left and right pointer: O(n) time, O(1) space
    let [l, r] = [0, numbers.length - 1];
    while(l < r) {
        const res = numbers[l] + numbers[r];
        if(res > target) r--;
        else if(res < target) l++;
        else return [l + 1, r + 1];
    }
};