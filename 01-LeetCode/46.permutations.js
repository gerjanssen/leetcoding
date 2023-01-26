/* 46. Permutations: https://leetcode.com/problems/permutations/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:45:43 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:45:43 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const backtrack = (permutation, used) => {
        if(permutation.length === nums.length) {
            res.push([...permutation]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(!used[i]) {
                permutation.push(nums[i]);
                used[i] = true;
                backtrack(permutation, used);
                permutation.pop();
                used[i] = false;
            }
        }
    };

    backtrack([], new Array(nums.length).fill(false));
    return res;
};