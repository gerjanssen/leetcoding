/* 15. 3Sum: https://leetcode.com/problems/3sum/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 13:23:30 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 13:25:33
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // solution using the idea of 2Sum II where we sort the input first and then apply the principle of 2Sum II
    // O(n^2) time, O(1) space

    const res = [];
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        const target = 0 - nums[i]; 
        let [l, r] = [i + 1, nums.length - 1];
        while(l < r) {
            const sum = nums[l] + nums[r];
            if(sum < target) l++;
            else if(sum > target) r--;
            else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while(nums[l] === nums[l - 1]) l++;
            }
        }        
    }

    return res;
};